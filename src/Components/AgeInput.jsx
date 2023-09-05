import { useContext } from "react"
import AppContext from "../Context"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { tr } from "date-fns/locale";
import { useState } from "react";



const AgeInput = () => {

    const { selectedDate, setSelectedDate } = useContext(AppContext)
    const { age, setAge } = useContext(AppContext)
    const { isCalculated, setIsCalculated } = useContext(AppContext)
    const { isDateNull, setIsDateNull } = useContext(AppContext)
    const { yearIndex, setYearIndex } = useContext(AppContext)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [throwError, setThrowError] = useState(false)
    const [ageError, setAgeError] = useState(false)

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    const monthNumber = () => {
        if (windowWidth > 1500) {
            return 2
        }

        else {
            return 1
        }
    }


    function indexDecider() {
        if(age.userYear >= 6){
            setAgeError(true)
        }
        else{
            switch (true) {
                case age.userYear === 0 && age.userMonth <= 5:
                    setYearIndex(0)
                    break
                case (age.userYear === 0 && age.userMonth >= 6) && (age.userYear === 0 && age.userMonth <= 7):
                    setYearIndex(1)
                    break
                case (age.userYear === 0 && age.userMonth >= 8) && (age.userYear === 0 && age.userMonth <= 9):
                    setYearIndex(2)
                    break
                case (age.userYear === 0 && age.userMonth >= 10) && (age.userYear === 0 && age.userMonth <= 11):
                    setYearIndex(3)
                    break
                case (age.userYear === 1 && age.userMonth >= 0) && (age.userYear === 1 && age.userMonth <= 1):
                    setYearIndex(4)
                    break
                case (age.userYear === 1 && age.userMonth >= 2) && (age.userYear === 1 && age.userMonth <= 3):
                    setYearIndex(5)
                    break
                case (age.userYear === 1 && age.userMonth >= 4) && (age.userYear === 1 && age.userMonth <= 5):
                    setYearIndex(6)
                    break
                case (age.userYear === 1 && age.userMonth >= 6) && (age.userYear === 1 && age.userMonth <= 11):
                    setYearIndex(7)
                    break
                case (age.userYear === 2 && age.userMonth >= 0) && (age.userYear === 2 && age.userMonth <= 5):
                    setYearIndex(8)
                    break
                case (age.userYear === 2 && age.userMonth >= 6) && (age.userYear === 2 && age.userMonth <= 11):
                    setYearIndex(9)
                    break
                case (age.userYear === 3 && age.userMonth >= 0) && (age.userYear === 3 && age.userMonth <= 11):
                    setYearIndex(10)
                    break
                case (age.userYear >= 4 && age.userMonth >= 0):
                    setYearIndex(11)
                    break
            }
        }       
    }


    const handleChange = (e) => {
        setSelectedDate(e.target.value)
    }

    const formSubmit = (e) => {

        //selectedDate === undefined ? setIsDateNull(true) : return

        if (selectedDate === undefined) {
            setIsDateNull(true)
            setThrowError(false)
        }

        else {
            const currentDate = new Date()

            function calculateAge(selectedDate) {

                const currentDateDay = currentDate.toISOString().slice(0, 10)
                const selectedDateDay = selectedDate.toISOString().slice(0, 10)

                console.log(currentDateDay)
                console.log(selectedDateDay)

                if (selectedDateDay === currentDateDay) {

                    setThrowError(true)
                    setIsDateNull(false)


                }
                else if (selectedDate > currentDate) {
                    setThrowError(true)
                    setIsDateNull(false)
                }

                else {


                    const dayCount = (selectedDate, currentDate) => {
                        const diffTime = currentDate - selectedDate
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                        return diffDays
                    }

                    dayCount(selectedDate, currentDate)


                    const calculatedYear = Math.floor(dayCount(selectedDate, currentDate) / 365)
                    const calculatedMonth = Math.floor((dayCount(selectedDate, currentDate) % 365) / 30)


                    age.userYear = calculatedYear
                    age.userMonth = calculatedMonth
                    age.userYear >= 6 ? null : setIsCalculated(true)
                    console.log(age)

                }



            }

            calculateAge(selectedDate)
            indexDecider()
        }


    }

    const goBackButton = () => {
        setAgeError(false)
    }

    const goToday = (e) => {
        e.preventDefault()
        console.log(selectedDate)
    }


    const thisDate = new Date()
    const limitedYear = thisDate.getFullYear()

    const modifiers = {
        disabled: {after: thisDate}
    }

    return (
        <>
            {ageError && (
                <div className="ageerror-overlay">
                    <div className="ageerror-content">
                        <p>Test 6 yaşından büyük çocuklar için yapılamaz, lütfen uygun bir tarih seçiniz.</p>
                        <div className="ageerror-button-container">
                            <button onClick={goBackButton}>Geri Dön</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="ageinput-overlay">
                <div className="ageinput-container">

                    <label id="bhirtday-title">Lütfen çocuğun doğum tarihini giriniz </label>
                    <form>

                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            numberOfMonths={monthNumber()}
                            locale={tr}
                            captionLayout="dropdown"
                            fromYear={limitedYear-6}
                            toYear={limitedYear}
                            modifiers={modifiers}
                            
                        />

                    </form>
                    <div>
                        {throwError ?
                            <div className="throw-error">
                                <div>
                                    <h3>Çocuğun doğum tarihi bugün ya da ileri bir tarih olamaz!</h3>
                                </div>
                            </div> :
                            null}
                        {isDateNull ?
                            <div className="throw-error">
                                <h3>Tarih seçmediniz!</h3>
                            </div> : null
                        }
                    </div>
                    <button id="calculate-button" type="submit" onClick={formSubmit}>Hesapla</button>
                </div>


            </div>
        </>
    )
}

export default AgeInput