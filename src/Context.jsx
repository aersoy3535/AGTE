import { createContext, useState } from "react";

const AppContext = createContext()

export function AppProvider({ children }) {

    const [accepted, setAccepted] = useState(true)
    const [selectedDate, setSelectedDate] = useState(new Date())

    const [age, setAge] = useState({
        userYear: 0,
        userMonth: 0
    })

    const [isCalculated, setIsCalculated] = useState(false)
    const [isDateNull, setIsDateNull] = useState(false)

    const [monthIndex, setMonthIndex] = useState(age.userMonth)
    const [yearIndex, setYearIndex] = useState(age.userYear)


    return (
        <AppContext.Provider value={{
            accepted, setAccepted, selectedDate, setSelectedDate,
            age, setAge, isCalculated, setIsCalculated, isDateNull, setIsDateNull, 
            monthIndex, setMonthIndex, yearIndex, setYearIndex
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext