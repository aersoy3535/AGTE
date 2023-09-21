import { createContext, useState } from "react";

const AppContext = createContext()

export function AppProvider({ children }) {

    const [accepted, setAccepted] = useState(true)
    const [formFilled, setFormFilled] = useState(true)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [secondFormFilled, setSecondFormFilled] = useState(false)


    const [age, setAge] = useState({
        userYear: 0,
        userMonth: 0
    })

    const [questionHistory, setQuestionHistory] = useState([])

    const [isCalculated, setIsCalculated] = useState(false)
    const [isDateNull, setIsDateNull] = useState(false)

    const [monthIndex, setMonthIndex] = useState(0)
    const [yearIndex, setYearIndex] = useState(0)

    /* Scores */
    const [dilScore, setDilScore] = useState(0)
    const [sosyalScore, setSosyalScore] = useState(0)
    const [kabaScore, setKabaScore] = useState(0)
    const [inceScore, setInceScore] = useState(0)
    const [gelisimScore, setGelisimScore] = useState(0)

    /*Score Tresholds*/
    
    const [dilScoreTreshold, setDilScoreTreshold] = useState(0)
    const [sosyalScoreTreshold, setSosyalScoreTreshold] = useState(0)
    const [kabaScoreTreshold, setKabaScoreTreshold] = useState(0)
    const [inceScoreTreshold, setInceScoreTreshold] = useState(0)
    const [genelGelisimTreshold, setGenelGelisimTreshold] = useState(0)

    /*Test Termination*/
    const [terminatePoint, setTerminatePoint] = useState(0)
    const [testTerminated, setTestTerminated] = useState(false)
    const [isTerminated, setIsTerminated] = useState(false)



    /*Child State*/
    const [formData, setFormData] = useState({
        name:"",
        gender: "",
        schoolStatus:false,
        schoolName:"",
        siblings:[],
        evaluationReason:"",
        disabilityStatus:"",
        disability:[],
        parentName:"",
        parenthood:[],
        city:"",
        district: "",
        phoneNumber:"",
        educationStatusMother:"",
        educationStatusFather:"",
        motherJob:"",
        fatherJob:"",
        isParentRelative: false,
        isEarlyBirth: false,
        earlyBhirthMonth: "",
        birthWeight:"",
        afterBirthComplication:"",
        accident:"",
        fallBurnPoisoned:"",
        generalObservation:"",
        parentCredibility:""

    })


    return (
        <AppContext.Provider value={{
            accepted, setAccepted, formFilled, setFormFilled, selectedDate, setSelectedDate,
            age, setAge, isCalculated, setIsCalculated, isDateNull, setIsDateNull, 
            monthIndex, setMonthIndex, yearIndex, setYearIndex, setDilScore, setSosyalScore, setKabaScore, setInceScore,
            terminatePoint, setTerminatePoint, formData, setFormData, questionHistory, setQuestionHistory,
            dilScore, sosyalScore, kabaScore, inceScore, testTerminated, setTestTerminated, isTerminated, setIsTerminated,
            dilScoreTreshold, setDilScoreTreshold,sosyalScoreTreshold, setSosyalScoreTreshold,kabaScoreTreshold, setKabaScoreTreshold,inceScoreTreshold, 
            setInceScoreTreshold, gelisimScore, setGelisimScore, genelGelisimTreshold, setGenelGelisimTreshold,
            secondFormFilled, setSecondFormFilled
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext