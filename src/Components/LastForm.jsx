import { useState, useRef, useContext } from "react"
import AppContext from "../Context"



const LastForm = () => {

    const { formData, setFormData } = useContext(AppContext)
    const { setSecondFormFilled } = useContext(AppContext)

    const [earlyBirth, setEarlyBirth] = useState(false)
    const [afterBirthComplication, setAfterBirthComplication] = useState([])
    const [askSave, setAskSave] = useState(false)
    const [throwError, setThrowError] = useState(false)


    const realtivityHandler = (event) => {
        const { value, name, checked, type } = event.target

        if (type === "radio" && !checked) {
            return
        }
        else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }))
        }

    }

    const earlyBirthHandler = (event) => {
        const { value, checked, name, type } = event.target

        setEarlyBirth(value == "true")

        if (type === "radio" && !checked) {
            return
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const earlyBhirthMonthHandler = (event) => {

        if (event.target.value < 1) {
            event.target.value = ""
        }
        else if (event.target.value >= 9) {
            event.target.value = ""
        }
        else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [event.target.name]: event.target.value
            }))
        }
    }

    const bhirthWeightHandler = (event) => {
        const { name, value, checked, type } = event.target

        if (type === "radio" && !checked) {
            return
        }
        else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }))
        }
    }

    const handleAfterBirthComplication = (event) => {
        const { value, checked } = event.target

        if (checked) {
            setAfterBirthComplication((prevAfterBirthComplication) => [...prevAfterBirthComplication, value])
        }
        else {
            setAfterBirthComplication((prevAfterBirthComplication) => prevAfterBirthComplication.filter((complication) => complication !== value))
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            afterBirthComplication: afterBirthComplication
        }))

    }

    const textHandler = (event) => {
        const { name, value } = event.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const parentCredibilityHandler = (event) => {
        const { value, type, checked, name } = event.target

        if (type === "radio" && !checked) {
            return
        }

        else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const saveButtonClick = () => {
        if (
            formData.isParentRelative !== "" &&
            formData.isEarlyBirth !== "" &&
            formData.birthWeight !== "" &&
            formData.generalObservation !== "" &&
            formData.parentCredibility !== ""
        ) {
            setAskSave(true)
        }
        else {
            setThrowError(true)
        }
    }

    const goBackButton = () => {
        setAskSave(false)
        setThrowError(false)
    }

    const continueButton = () => {
        setAskSave(false)
        setSecondFormFilled(true)
    }

    return (
        <>
            {throwError && (
                <div className="asksave-overlay">
                    <div className="asksave-content">
                        <p>Lütfen tüm alanları eksiksiz doldurunuz</p>
                        <div className="ask-button-container">
                            <button onClick={goBackButton}>Geri Dön</button>
                        </div>
                    </div>
                </div>
            )}
            {askSave && (
                <div className="asksave-overlay">
                    <div className="asksave-content">
                        <p>Çocuğa ait veriler kaydedilecektir, devam etmek istiyor musunuz?</p>
                        <div className="ask-button-container">
                            <button onClick={continueButton}>Devam et</button>
                            <button onClick={goBackButton}>Geri Dön</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="form-overlay">
                <form onSubmit={handleSubmit}>
                    <div className="last-form-container">
                        <h1 className="last-title">Çocuğun Gelişim Öyküsü</h1>

                        <div className="last-left">
                            <label>Anne-Baba akrabalığı</label>
                            <div className="relative-input">
                                <input type="radio" name="isParentRelative" value={true} onChange={realtivityHandler} />Var
                                <input type="radio" name="isParentRelative" value={false} onChange={realtivityHandler} /> Yok
                            </div>
                            <label>Doğum Zamanı</label>
                            <div className="birth-info">
                                <input type="radio" name="isEarlyBirth" value={false} onChange={earlyBirthHandler} />Normal Doğum
                                <input type="radio" name="isEarlyBirth" value={true} onChange={earlyBirthHandler} /> Erken Doğum
                            </div>
                            {earlyBirth &&
                                <>
                                    <label>Kaç aylık olduğunu belirtiniz <br></br>(1-8 arasında bir değer giriniz)</label>
                                    <input type="number" name="earlyBhirtMonth" id="earlyBhirtMonth" max="8" min="1" onChange={earlyBhirthMonthHandler} />
                                </>
                            }
                            <label>Doğum Ağırlığı</label>
                            <div className="birth-weight-info">
                                <input type="radio" name="birthWeight" value={"<2500g"} onClick={bhirthWeightHandler} />{`<2500g`}
                                <input type="radio" name="birthWeight" value={">2500g"} onClick={bhirthWeightHandler} /> {`>2500g`}
                            </div>
                            <label>Doğum Sonrası Bilgiler</label>
                            <div className="info-container">
                                <div className="after-birth-info">
                                    <label><input type="checkbox" name="afterBirthComplication" onChange={handleAfterBirthComplication} value={"Mor doğum"} /> Mor doğum</label>
                                    <label><input type="checkbox" name="afterBirthComplication" onChange={handleAfterBirthComplication} value={"Ağır ateşli hastalık"} /> Ağır ateşli hastalık</label>
                                    <label><input type="checkbox" name="afterBirthComplication" onChange={handleAfterBirthComplication} value={"Kan değişimi"} /> Kan değişimi</label>
                                    <label><input type="checkbox" name="afterBirthComplication" onChange={handleAfterBirthComplication} value={"Havale"} /> Havale</label>
                                    <label><input type="checkbox" name="afterBirthComplication" onChange={handleAfterBirthComplication} value={"Uzun süreli sarılık"} /> Uzun süreli sarılık</label>
                                </div>
                            </div>
                        </div>

                        <div className="last-right">
                            <label>Geçirilmiş Önemli Kaza</label>
                            <input type="text" name="accident" id="accident" onChange={textHandler} />
                            <label>Düşme, yanma, zehirlenme</label>
                            <input type="text" name="fallBurnPoisoned" id="fallBurnPoisoned" onChange={textHandler} />
                            <label>Genel Gözlemler</label>
                            <div className="last-textarea-input">
                                <textarea name="generalObservation" id="generalObservation" cols="20" rows="3" onChange={textHandler}></textarea>
                            </div>
                            <label className="lastlabel">Verilen Bilginin Güvenirliği(bilgi verenle ilgili izleniminizi seçiniz)</label>
                            <div className="credibility-info">
                                <div className="credibility-container">
                                    <label><input type="radio" name="parentCredibility" id="parentCredibility" value={"Hiç güvenilmez"} onChange={parentCredibilityHandler} /> Hiç güvenilmez</label>
                                    <label><input type="radio" name="parentCredibility" id="parentCredibility" value={"Orta derecede güvenilir"} onChange={parentCredibilityHandler} /> Orta derecede güvenilir</label>
                                    <label><input type="radio" name="parentCredibility" id="parentCredibility" value={"Çok güvenilir"} onChange={parentCredibilityHandler} /> Çok güvenilir</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="save-button" onClick={saveButtonClick}>Devam Et</button>
                    </div>

                </form>
            </div>
        </>
    )
}


export default LastForm