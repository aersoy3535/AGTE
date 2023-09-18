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
    const { setDilScoreTreshold, setSosyalScoreTreshold, setKabaScoreTreshold, setInceScoreTreshold } = useContext(AppContext)


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
        if (age.userYear >= 6) {
            setAgeError(true)
        }
        else {
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

    function tresholdDecider() {
        switch (true) {
            case (age.userYear === 0 && age.userMonth <= 2):
                setKabaScoreTreshold(2)
                break
            case (age.userYear === 0 && age.userMonth === 3):
                setDilScoreTreshold(5)
                setInceScoreTreshold(3)
                setKabaScoreTreshold(3)
                setSosyalScoreTreshold(6)
                break
            case (age.userYear === 0 && age.userMonth === 4):
                setDilScoreTreshold(7)
                setInceScoreTreshold(4)
                setKabaScoreTreshold(4)
                setSosyalScoreTreshold(6)
                break
            case (age.userYear === 0 && age.userMonth === 5):
                setDilScoreTreshold(10)
                setInceScoreTreshold(7)
                setKabaScoreTreshold(5)
                setSosyalScoreTreshold(8)
                break
            case (age.userYear === 0 && age.userMonth === 6):
                setDilScoreTreshold(11)
                setInceScoreTreshold(9)
                setKabaScoreTreshold(6)
                setSosyalScoreTreshold(10)
                break
            case (age.userYear === 0 && age.userMonth === 7):
                setDilScoreTreshold(13)
                setInceScoreTreshold(11)
                setKabaScoreTreshold(8)
                setSosyalScoreTreshold(11)
                break
            case (age.userYear === 0 && age.userMonth === 8):
                setDilScoreTreshold(15)
                setInceScoreTreshold(11)
                setKabaScoreTreshold(9)
                setSosyalScoreTreshold(13)
                break
            case (age.userYear === 0 && age.userMonth === 9):
                setDilScoreTreshold(15)
                setInceScoreTreshold(11)
                setKabaScoreTreshold(10)
                setSosyalScoreTreshold(15)
                break
            case (age.userYear === 0 && age.userMonth === 10):
                setDilScoreTreshold(16)
                setInceScoreTreshold(11)
                setKabaScoreTreshold(11)
                setSosyalScoreTreshold(16)
                break
            case (age.userYear === 0 && age.userMonth === 11):
                setDilScoreTreshold(18)
                setInceScoreTreshold(11)
                setKabaScoreTreshold(12)
                setSosyalScoreTreshold(17)
                break
            case (age.userYear === 1 && age.userMonth === 0):
                setDilScoreTreshold(19)
                setInceScoreTreshold(11)
                setKabaScoreTreshold(14)
                setSosyalScoreTreshold(18)
                break
            case (age.userYear === 1 && age.userMonth === 1):
                setDilScoreTreshold(23)
                setInceScoreTreshold(11)
                setKabaScoreTreshold(17)
                setSosyalScoreTreshold(22)
                break
            case (age.userYear === 1 && age.userMonth >= 2) && (age.userYear === 1 && age.userMonth <= 3):
                setDilScoreTreshold(24)
                setInceScoreTreshold(15)
                setKabaScoreTreshold(18)
                setSosyalScoreTreshold(23)
                break
            case (age.userYear === 1 && age.userMonth >= 4) && (age.userYear === 1 && age.userMonth <= 5):
                setDilScoreTreshold(27)
                setInceScoreTreshold(15)
                setKabaScoreTreshold(19)
                setSosyalScoreTreshold(25)
                break
            case (age.userYear === 1 && age.userMonth >= 6) && (age.userYear === 1 && age.userMonth <= 7):
                setDilScoreTreshold(30)
                setInceScoreTreshold(16)
                setKabaScoreTreshold(20)
                setSosyalScoreTreshold(25)
                break
            case (age.userYear === 1 && age.userMonth >= 8) && (age.userYear === 1 && age.userMonth <= 9):
                setDilScoreTreshold(34)
                setInceScoreTreshold(17)
                setKabaScoreTreshold(21)
                setSosyalScoreTreshold(28)
                break
            case (age.userYear === 1 && age.userMonth >= 10) && (age.userYear === 1 && age.userMonth <= 11):
                setDilScoreTreshold(36)
                setInceScoreTreshold(17)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(30)
                break
            case (age.userYear === 2 && age.userMonth >= 0) && (age.userYear === 2 && age.userMonth <= 2):
                setDilScoreTreshold(38)
                setInceScoreTreshold(18)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(30)
                break
            case (age.userYear === 2 && age.userMonth >= 3) && (age.userYear === 2 && age.userMonth <= 5):
                setDilScoreTreshold(40)
                setInceScoreTreshold(19)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(31)
                break
            case (age.userYear === 2 && age.userMonth >= 6) && (age.userYear === 2 && age.userMonth <= 8):
                setDilScoreTreshold(46)
                setInceScoreTreshold(19)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(33)
                break
            case (age.userYear === 2 && age.userMonth >= 9) && (age.userYear === 2 && age.userMonth <= 11):
                setDilScoreTreshold(47)
                setInceScoreTreshold(20)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(33)
                break
            case (age.userYear === 3 && age.userMonth >= 0) && (age.userYear === 3 && age.userMonth <= 2):
                setDilScoreTreshold(48)
                setInceScoreTreshold(20)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(34)
                break
            case (age.userYear === 3 && age.userMonth >= 3) && (age.userYear === 3 && age.userMonth <= 5):
                setDilScoreTreshold(49)
                setInceScoreTreshold(21)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(35)
                break
            case (age.userYear === 3 && age.userMonth >= 6) && (age.userYear === 3 && age.userMonth <= 8):
                setDilScoreTreshold(51)
                setInceScoreTreshold(21)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(35)
                break
            case (age.userYear === 3 && age.userMonth >= 9) && (age.userYear === 3 && age.userMonth <= 11):
                setDilScoreTreshold(52)
                setInceScoreTreshold(21)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(35)
                break
            case (age.userYear === 4 && age.userMonth >= 0) && (age.userYear === 4 && age.userMonth <= 6):
                setDilScoreTreshold(54)
                setInceScoreTreshold(21)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(35)
                break
            case (age.userYear === 4 && age.userMonth >= 6) && (age.userYear === 4 && age.userMonth <= 11):
                setDilScoreTreshold(56)
                setInceScoreTreshold(21)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(35)
                break
            case (age.userYear === 5 && age.userMonth >= 0) && (age.userYear === 5 && age.userMonth <= 6):
                setDilScoreTreshold(58)
                setInceScoreTreshold(21)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(35)
                break
            case (age.userYear === 5 && age.userMonth >= 7) && (age.userYear === 5 && age.userMonth <= 11):
                setDilScoreTreshold(59)
                setInceScoreTreshold(21)
                setKabaScoreTreshold(22)
                setSosyalScoreTreshold(35)
                break
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
            tresholdDecider()
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
        disabled: { after: thisDate }
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
                            fromYear={limitedYear - 6}
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