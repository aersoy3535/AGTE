import React, { useContext, useEffect, useState } from "react"
import { BiSolidMinusCircle, BiSolidPlusCircle } from 'react-icons/bi'
import AppContext from '../Context'
import cities from './Cities'


const Form = () => {

    const [askSave, setAskSave] = useState(false)
    const [throwError, setThrowError] = useState(false)
    const [answer, setAnswer] = useState(null)
    const [disabilityAnswer, setDisabilityAnswer] = useState(null)
    const [inputList, setInputList] = useState([{ id: 0, age: "", gender: "" }])
    const [disabilityType, setDisabilityType] = useState([])
    const [parenthoodForm, setParenthoodForm] = useState([])
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedDistrict, setSelectedDistrict] = useState('')

    const { formData, setFormData, setFormFilled } = useContext(AppContext)

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const increaseInput = () => {
        if (inputList.length <= 2) {
            const newInput = [...inputList]
            newInput[inputList.length] = { id: inputList.length, age: "", gender: "" }
            setInputList(newInput)
        }
        else {
            return
        }
    }

    const decreaseInput = () => {
        setInputList(prevList => prevList.slice(0, prevList.length - 1))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    /*Input onchange functions*/

    const textInputHandler = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }
    const radioButtonHandler = (event) => {
        const { name, value, type, checked } = event.target

        if (type === "radio" && !checked) {
            return
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }
    const schoolStatusHandler = (event) => {
        setAnswer(event.target.value === "true")
        const { name, value, type, checked } = event.target

        if (type === "radio" && !checked) {
            return
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }
    const siblingHandler = (index, field, value) => {
        const newList = [...inputList]
        newList[index][field] = value;
        setInputList(newList)

        const siblingArray = newList.map(item => ({
            siblingAge: item.age,
            siblingGender: item.gender
        }))

        setFormData((prevFormData) => ({
            ...prevFormData,
            siblings: siblingArray
        }))
    }
    const handleEvaluationReason = (event) => {
        const { name, value } = event.target

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))

    }
    const disabilityStatusHandler = (event) => {
        setDisabilityAnswer(event.target.value === "true")
        const { name, value, type, checked } = event.target

        if (type === "radio" && !checked) {
            return
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const disabilityHandler = (event) => {
        const { value, checked } = event.target

        if (checked) {
            setDisabilityType((prevDisabilityType) => [...prevDisabilityType, value])
        }

        else {
            setDisabilityType((prevDisabilities) =>
                prevDisabilities.filter((disability) => disability !== value))
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            disability: disabilityType
        }))
    }

    const parentHoodHandler = (event) => {
        const { value, checked } = event.target

        if (checked) {
            setParenthoodForm((prevParenthood) => [...prevParenthood, value])
        }
        else {
            setParenthoodForm((prevParenthood) => prevParenthood.filter((parent) => parent !== value))
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            parenthood: parenthoodForm
        }))
    }

    const JobHandler = (event) => {
        const { value, name, checked, type } = event.target

        if (type === "radio" && !checked) {
            return
        }

        else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }))
        }

    }

   

    /*Button clicks*/

    const saveButtonClick = () => {
        if (
            formData.name !== "" &&
            formData.gender !== "" &&
            formData.schoolStatus !== null &&
            formData.evaluationReason !== "" &&
            formData.disabilityStatus !== null &&
            formData.parentName !== "" &&
            formData.parenthood.length < 1 &&
            formData.city !== "" &&
            formData.district !== "" &&
            formData.phoneNumber !== "" &&
            formData.educationStatusMother !== "" &&
            formData.educationStatusFather !== "" &&
            formData.motherJob !== "" &&
            formData.fatherJob !== ""
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
        setFormFilled(false)
        console.log(formData)
    }

    /*City names*/

    const cityName = cities.map((item) => item.il)
    const cityNameSorted = cityName.sort((a,b) => a.localeCompare(b, "tr"))

    const getDistrictByCity = (cityName) => {
        const districtData = cities.find((item) => item.il === cityName)
        return districtData ? districtData.ilceler.sort((a,b) => {a.localeCompare(b, "tr")}) : []
    }

    const handleCityChange = (event) => {
        const newCity = event.target.value
        setSelectedCity(newCity)
        setSelectedDistrict('')

        const {name, value} = event.target

        setFormData((prevFormData) => 
        ({...prevFormData,
            [name] : value
        }))
        
    }

    const handleDistrictChange = (event) => {
        const newDistrict = event.target.value
        setSelectedDistrict(newDistrict)

        const {name, value} = event.target

        setFormData((prevFormData) => 
        ({...prevFormData,
            [name] : value
        }))


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
                    <div className="form-container">
                        <div className="left-section">
                            <h2 className="left-title">Çocukla ilgili bilgiler</h2>
                            <label htmlFor="name">İsim-Soyisim :</label>
                            <input type="text" id="childname" name="name" value={formData.name} onChange={textInputHandler} />

                            <label htmlFor="gender">Cinsiyet</label>

                            <div className="gender-input">
                                <input type="radio" id="male" name="gender" value="erkek" checked={formData.gender === "erkek"} onChange={radioButtonHandler} />Erkek
                                <input type="radio" id="female" name="gender" value="kadın" checked={formData.gender === "kadın"} onChange={radioButtonHandler} />Kadın
                            </div>

                            <label htmlFor="education">Kreş/Anaokuluna devam ediyor mu?</label>

                            <div className="school-input">
                                <input type="radio" name="schoolStatus" value={true} checked={answer === true} onChange={schoolStatusHandler} /> Evet
                                <input type="radio" name="schoolStatus" value={false} checked={answer === false} onChange={schoolStatusHandler} /> Hayır
                            </div>

                            {answer ? <><label htmlFor="schoolname">Okul Adı : </label>
                                <input type="text" id="schoolname" name="schoolName" onChange={textInputHandler} /></> : null}


                            <label>Kardeşleri</label>

                            <div className="sibling-container">
                                {inputList.map((input, index) =>
                                    <div key={input.id} className="sibling-input">
                                        <p>{index + 1})</p>
                                        <input style={{ width: '20%' }}
                                            type="text"
                                            placeholder="Yaş"
                                            id="ageholder"
                                            value={input.age}
                                            onChange={(e) => siblingHandler(index, 'age', e.target.value)}
                                        >
                                        </input>
                                        <input
                                            type="radio"
                                            name={`gender${index}`}
                                            onChange={() => siblingHandler(index, 'gender', 'male')}
                                        >
                                        </input>
                                        <p>Erkek</p>
                                        <input
                                            type="radio"
                                            name={`gender${index}`}
                                            onChange={() => siblingHandler(index, 'gender', 'female')}
                                        >
                                        </input>
                                        <p>Kadın</p>
                                        <BiSolidPlusCircle
                                            onClick={increaseInput}
                                        />
                                        {inputList.length == 1 ? null : <BiSolidMinusCircle
                                            onClick={decreaseInput}
                                        />}

                                    </div>
                                )}
                            </div>
                            <div>

                                <label>Değerlendirme Nedeni</label>
                                <div className="textarea-input">
                                    <textarea name="evaluationReason" id="evaluationReason" cols="20" rows="4" onChange={handleEvaluationReason}></textarea>
                                </div>
                            </div>
                            <div className="disability-container">
                                <label>Fiziksel Özür</label>
                                <input type="radio" name="disabilityStatus" value={true} checked={disabilityAnswer === true} onChange={disabilityStatusHandler} /> Var
                                <input type="radio" name="disabilityStatus" value={false} checked={disabilityAnswer === false} onChange={disabilityStatusHandler} /> Yok
                            </div>
                            {disabilityAnswer ? <div className="disability-checkbox">
                                <label>Belirtiniz</label>
                                <div className="checkbox-group">
                                    <label><input type="checkbox" name="disability-checkbox" value={"Görme"} onChange={disabilityHandler} /> Görme</label>
                                    <label><input type="checkbox" name="disability-checkbox" value={"Ortopedik"} onChange={disabilityHandler} /> Ortopedik</label>
                                    <label><input type="checkbox" name="disability-checkbox" value={"İşitme"} onChange={disabilityHandler} /> İşitme</label>
                                    <label><input type="checkbox" name="disability-checkbox" value={"Diğer"} onChange={disabilityHandler} /> Diğer</label>
                                </div>
                            </div>
                                : null}
                        </div>
                        <div className="right-section">
                            <h2 className="right-title">Görüşülen kişi ile ilgili bilgiler</h2>
                            <label htmlFor="parentname">İsim-Soyisim :</label>
                            <input type="text" id="parentname" name="parentName" onChange={textInputHandler} />
                            <label>Çocuğa Yakınlık Derecesi</label>
                            <div className="parent-attendance">
                                <p>Anne <input type="checkbox" value={"Anne"} onClick={parentHoodHandler}></input></p>
                                <p>Baba <input type="checkbox" value={"Baba"} onClick={parentHoodHandler}></input></p>
                                <p>Diğer <input type="checkbox" value={"Diğer"} onClick={parentHoodHandler}></input></p>
                            </div>
                            <label>İl</label>
                            <select id="city" name="city" onChange={handleCityChange} value={selectedCity}>
                                <option value="">İl Seçin</option>
                                {cityNameSorted.map((cityName) => (
                                    <option key={cityName} value={cityName}>
                                        {cityName}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="district">İlçe</label>
                            <select id="district" name="district" onChange={handleDistrictChange} value={selectedDistrict}>
                                <option value="">İlçe Seçin</option>
                                {selectedCity && getDistrictByCity(selectedCity).map((cityName) => (
                                    <option key={cityName} value={cityName}>
                                        {cityName}
                                    </option>
                                ))}
                            </select>
                            <label>Telefon Numarası</label>
                            <input type="text" id="phone" name="phoneNumber" onChange={textInputHandler}></input>
                            <div className="parent-education">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>Anne</td>
                                            <td>Baba</td>
                                        </tr>
                                        <tr>
                                            <td id="header">Okur Yazar Değil</td>
                                            <td><input type="radio" name="educationStatusMother" value="Okur Yazar Değil" onChange={JobHandler} /></td>
                                            <td><input type="radio" name="educationStatusFather" value="Okur Yazar Değil" onChange={JobHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td id="header">Okur-Yazar</td>
                                            <td><input type="radio" name="educationStatusMother" value="Okur-Yazar" onChange={JobHandler} /></td>
                                            <td><input type="radio" name="educationStatusFather" value="Okur-Yazar" onChange={JobHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td id="header">İlkokul</td>
                                            <td><input type="radio" name="educationStatusMother" value="İlkokul" onChange={JobHandler} /></td>
                                            <td><input type="radio" name="educationStatusFather" value="İlkokul" onChange={JobHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td id="header">Ortaokul</td>
                                            <td><input type="radio" name="educationStatusMother" value="Ortaokul" onChange={JobHandler} /></td>
                                            <td><input type="radio" name="educationStatusFather" value="Ortaokul" onChange={JobHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td id="header">Lise</td>
                                            <td><input type="radio" name="educationStatusMother" value="Lise" onChange={JobHandler} /></td>
                                            <td><input type="radio" name="educationStatusFather" value="Lise" onChange={JobHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td id="header">Üniversite</td>
                                            <td><input type="radio" name="educationStatusMother" value="Üniversite" onClick={JobHandler} /></td>
                                            <td><input type="radio" name="educationStatusFather" value="Üniversite" onClick={JobHandler} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <label >Anne Meslek</label>
                            <input type="text" id="motherJob" name="motherJob" onChange={textInputHandler}></input>
                            <label >Baba Meslek</label>
                            <input type="text" id="fatherJob" name="fatherJob" onChange={textInputHandler}></input>
                        </div>
                        <button type="submit" className="save-button" onClick={saveButtonClick}>Devam Et</button>
                    </div>

                </form>


            </div>
        </>
    )
}

export default Form