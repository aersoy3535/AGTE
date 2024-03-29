import { createContext, useState } from "react";

const AppContext = createContext()

export function AppProvider({ children }) {

    const [accepted, setAccepted] = useState(false)
    const [formFilled, setFormFilled] = useState(false)
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

    /*20 percent below developement tresholds*/
    const [dil20Treshold, setDil20Treshold] = useState(0)
    const [sosyal20Treshold, setSosyal20Treshold] = useState(0)
    const [kaba20Treshold, setKaba20Treshold] = useState(0)
    const [ince20Treshold, setInce20Treshold] = useState(0)
    const [genel20Treshold, setGenel20Treshold] = useState(0)

    /*30 percent below developement tresholds*/

    const [dil30Treshold, setDil30Treshold] = useState(0)
    const [sosyal30Treshold, setSosyal30Treshold] = useState(0)
    const [kaba30Treshold, setKaba30Treshold] = useState(0)
    const [ince30Treshold, setInce30Treshold] = useState(0)
    const [genel30Treshold, setGenel30Treshold] = useState(0)

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
            secondFormFilled, setSecondFormFilled,setDil20Treshold,setSosyal20Treshold,setKaba20Treshold,setInce20Treshold,setGenel20Treshold,
            setDil30Treshold, setSosyal30Treshold, setKaba30Treshold, setInce30Treshold,setGenel30Treshold,dil20Treshold,sosyal20Treshold,kaba20Treshold,ince20Treshold,
            genel20Treshold, dil30Treshold, sosyal30Treshold, kaba30Treshold, ince30Treshold, genel30Treshold
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext