import { useContext } from "react"
import AppContext from "../Context"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { tr } from "date-fns/locale";
import { useState } from "react";
import { set } from "date-fns";


const AgeInput = () => {

    const { selectedDate, setSelectedDate } = useContext(AppContext)
    const { age, setAge } = useContext(AppContext)
    const { isCalculated, setIsCalculated } = useContext(AppContext)
    const { isDateNull, setIsDateNull } = useContext(AppContext)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [throwError, setThrowError] = useState(false)

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
                    setIsCalculated(true)
                    console.log(age)

                }



            }

            calculateAge(selectedDate)


        }


    }


    return (
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
    )
}

export default AgeInput