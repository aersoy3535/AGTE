import { useState } from "react"
import questions from "./Questions"
import { useContext } from "react"
import AppContext from "../Context"


const Enquiry = () => {


    const { monthIndex, setMonthIndex} = useContext(AppContext)

    const yesButtonClick = () => {
        setMonthIndex(monthIndex +1)
    }


    return (
        <div className="enquiry-overlay">
            <div className="enquiry-container">
                <h1>{questions[0].title}</h1>
                <h2>{questions[0].context[monthIndex].text}</h2>
                <div className="question-button-container">
                    <button id="yes-button" onClick={yesButtonClick}>Evet</button>
                    <button id="no-button">Hayır</button>
                    <button id="unknown-button">Bilinmiyor</button>
                </div>

            </div>
        </div>
    )
}

export default Enquiry