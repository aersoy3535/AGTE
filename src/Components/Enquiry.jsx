import questions from "./Questions"
import { useContext } from "react"
import AppContext from "../Context"
import React, { useEffect, useState } from "react"



const Enquiry = () => {


    const { monthIndex, setMonthIndex } = useContext(AppContext)
    const { yearIndex, setYearIndex } = useContext(AppContext)
    const { setDilScore, setSosyalScore, setKabaScore, setInceScore } = useContext(AppContext)
    const { dilScore, sosyalScore, kabaScore, inceScore } = useContext(AppContext)
    const { terminatePoint, setTerminatePoint } = useContext(AppContext)
    const { questionHistory, setQuestionHistory } = useContext(AppContext)
    const { setIsTerminated } = useContext(AppContext)

    const [isGoingBack, setIsGoingBack] = useState(true)
    const [throwError, setThrowError] = useState(false)
    const [endTest, setEndTest] = useState(false)
    const [ hasUnansweredCalculated, setHasUnansweredCalculated] = useState(false)

    useEffect(() => {
        calculateUnanswered()
        checkAnswered()
        goBack()
        questionHistoryBuilder()
        console.log(dilScore,inceScore , kabaScore, sosyalScore)
    }, [monthIndex, yearIndex, isGoingBack])//Cevaplanan sorununun YearIndex ve MonthIndex state'ine bağlı olarak güncellenmesi için

    const goBack = () => {
        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < questions[i].context.length; j++) {
                if (questions[i].context.every(question => question.answered === true)) {
                    setIsGoingBack(false)
                }
            }
        }
    }

    const checkAnswered = () => {
        if (questions[yearIndex].context[monthIndex].answered === true) {
            setMonthIndex(prevValue => prevValue + 1)
        }
    } //Cevaplanan sorunun atlanması için

    const increaseScore = (y, m) => {
        switch (true) {
            case questions[y].context[m].developementArea === "Dil-Bilissel":
                setDilScore(prevValue => prevValue + 1)
                break
            case questions[y].context[m].developementArea === "Sosyal Beceri-Oz bakim":
                setSosyalScore(prevValue => prevValue + 1)
                break
            case questions[y].context[m].developementArea === "Kaba Motor":
                setKabaScore(prevValue => prevValue + 1)
                break
            case questions[y].context[m].developementArea === "Ince Motor":
                setInceScore(prevValue => prevValue + 1)
        }

    }


    const yesButtonClick = () => {

        if (questions[yearIndex].context[monthIndex].id === 153) {
            setIsTerminated(true)
        }
        else if (monthIndex > questions[yearIndex].context.length - 2) {

            setMonthIndex(0)
            setYearIndex(prevValue => prevValue + 1)

        }
        else {
            setMonthIndex(monthIndex + 1)
        }

        questions[yearIndex].context[monthIndex].answered = true
        increaseScore(yearIndex, monthIndex)
        setTerminatePoint(0)
    }

    const noButtonClick = () => {
        if (questions[yearIndex].context[monthIndex].id === 153) {
            setIsTerminated(true)
        }
        else if (monthIndex > questions[yearIndex].context.length - 2) {
            setMonthIndex(0)
            setYearIndex(prevValue => prevValue + 1)
        }
        else if (terminatePoint === 7) {
            setEndTest(true)
        }
        else if (!isGoingBack) {
            setMonthIndex(prevValue => prevValue + 1)
        }
        else if (yearIndex < 1) {
            setMonthIndex(prevValue => prevValue + 1)
        }
        else if (yearIndex == 1 && questions[0].context[0].answered == true) {
            setMonthIndex(prevValue => prevValue + 1)
        }
        else {
            setYearIndex(prevValue => prevValue - 1)
            setMonthIndex(0)
        }

        questions[yearIndex].context[monthIndex].answered = true
        setTerminatePoint(prevValue => prevValue + 1)
    }

    const unknownButtonClick = () => {
        if (questions[yearIndex].context[monthIndex].id === 153) {
            setIsTerminated(true)
        }
        else if (monthIndex > questions[yearIndex].context.length - 2) {
            setMonthIndex(0)
            setYearIndex(prevValue => prevValue + 1)
        }
        else {
            setMonthIndex(prevValue => prevValue + 1)
        }
        questions[yearIndex].context[monthIndex].answered = true


    }

    const questionHistoryBuilder = () => {
        setQuestionHistory((prevQuestionHistory) => [...prevQuestionHistory, [yearIndex, monthIndex]])
    }

    const returnPreviousQuestion = () => {
        if (questionHistory.length > 1) {
            const [lastYearIndex, lastMonthIndex] = questionHistory[questionHistory.length - 1];

            questions[lastYearIndex].context[lastMonthIndex].answered = false;

            setYearIndex(lastYearIndex);
            setMonthIndex(lastMonthIndex);
            setQuestionHistory((prevQuestionHistory) => prevQuestionHistory.slice(0, -1));
            setThrowError(!throwError)

        } else {
            return
        }
    }

    const disgard = () => {
        questionHistoryBuilder()
        setThrowError(false)
    }

    const endTestButton = () => {
        questions[yearIndex].context[monthIndex].answered = true
        setTerminatePoint(prevValue => prevValue + 1)
        setEndTest(false)
        setIsTerminated(true)
    }


    const calculateUnanswered = () => {

        if(!isGoingBack && !hasUnansweredCalculated){
            outerLoop: 
            for(let i=0; i<questions.length; i++){
                for(let j=0; j<questions[i].context.length; j++){
                    if(questions[i].context[j].answered === false){
                        increaseScore(i,j)

                    }
                    else{break outerLoop}
                }
            }
            setHasUnansweredCalculated(true)
        }


    }

    return (
        <>
            {endTest && (
                <div className="endtest-overlay">
                    <div className="endtest-content">
                        <p>8 soru üst üste hayır cevaplandı, testin bitmesi gerekiyor.</p>
                        <div className="endtest-container">
                            <button onClick={() => setEndTest(false)} >Vazgeç</button>
                            <button onClick={endTestButton}>Testi bitir</button>
                        </div>
                    </div>
                </div>
            )}
            {throwError && (
                <div className="asksave-overlay">
                    <div className="asksave-content">
                        <p>Önceki soruya dönmek istediğinize emin misiniz?</p>
                        <div className="ask-button-container">
                            <button onClick={disgard}>Vazgeç</button>
                            <button onClick={returnPreviousQuestion}>Geri Dön</button>
                        </div>
                    </div>
                </div>)}
            <div className="enquiry-overlay">
                <div className="enquiry-container">
                    <button className="return-button"
                        onClick={returnPreviousQuestion}>Bir önceki soruya dön</button>
                    <h1>{questions[yearIndex].title}</h1>
                    <h2>Soru {questions[yearIndex].context[monthIndex].id + 1}</h2>
                    {questions[yearIndex].context[monthIndex].id === 153 ? <h3 className="last-question">Son soru!</h3> : null}
                    <h2>{questions[yearIndex].context[monthIndex].text}</h2>
                    <div className="question-button-container">
                        <button id="yes-button" onClick={yesButtonClick}>Evet</button>
                        <button id="no-button" onClick={noButtonClick}>Hayır</button>
                        <button id="unknown-button" onClick={unknownButtonClick}>Bilinmiyor</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Enquiry