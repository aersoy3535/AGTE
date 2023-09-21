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
    const { setDilScoreTreshold, setSosyalScoreTreshold, setKabaScoreTreshold, setInceScoreTreshold, setGenelGelisimTreshold } = useContext(AppContext)
    const { setDil20Treshold, setSosyal20Treshold, setKaba20Treshold, setInce20Treshold, setGenel20Treshold,
        setDil30Treshold, setSosyal30Treshold, setKaba30Treshold, setInce30Treshold, setGenel30Treshold} = useContext(AppContext)

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


    const indexDecider = () => {
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

    const tresholdDecider = () => {
        if (age.userYear >= 6) {
            return
        }
        else {
            switch (true) {
                case (age.userYear === 0 && age.userMonth <= 2):
                    setKabaScoreTreshold(2)
                    setGenelGelisimTreshold(10)
                    break
                case (age.userYear === 0 && age.userMonth === 3):
                    setDilScoreTreshold(5)
                    setInceScoreTreshold(3)
                    setKabaScoreTreshold(3)
                    setSosyalScoreTreshold(6)
                    setGenelGelisimTreshold(15)
                    break
                case (age.userYear === 0 && age.userMonth === 4):
                    setDilScoreTreshold(7)
                    setInceScoreTreshold(4)
                    setKabaScoreTreshold(4)
                    setSosyalScoreTreshold(6)
                    setGenelGelisimTreshold(20)
                    break
                case (age.userYear === 0 && age.userMonth === 5):
                    setDilScoreTreshold(10)
                    setInceScoreTreshold(7)
                    setKabaScoreTreshold(5)
                    setSosyalScoreTreshold(8)
                    setGenelGelisimTreshold(30)

                    /*20 developement treshold*/
                    setDil20Treshold(7)
                    setInce20Treshold(4)
                    setKaba20Treshold(4)
                    setSosyal20Treshold(6)
                    setGenel20Treshold(20)

                    /*30 developement treshold*/
                    setDil30Treshold(3)
                    setInce30Treshold(3)
                    setKaba30Treshold(3)
                    setSosyal30Treshold(6)
                    setGenel30Treshold(17)

                    break
                case (age.userYear === 0 && age.userMonth === 6):
                    setDilScoreTreshold(11)
                    setInceScoreTreshold(9)
                    setKabaScoreTreshold(6)
                    setSosyalScoreTreshold(10)
                    setGenelGelisimTreshold(40)

                    /*20 developement treshold*/
                    setDil20Treshold(10)
                    setInce20Treshold(7)
                    setKaba20Treshold(4)
                    setSosyal20Treshold(8)
                    setGenel20Treshold(30)

                    /*30 developement treshold*/
                    setDil30Treshold(8)
                    setInce30Treshold(6)
                    setKaba30Treshold(4)
                    setSosyal30Treshold(8)
                    setGenel30Treshold(25)

                    break
                case (age.userYear === 0 && age.userMonth === 7):
                    setDilScoreTreshold(13)
                    setInceScoreTreshold(11)
                    setKabaScoreTreshold(8)
                    setSosyalScoreTreshold(11)
                    setGenelGelisimTreshold(45)

                    /*20 developement treshold*/
                    setDil20Treshold(10)
                    setInce20Treshold(8)
                    setKaba20Treshold(6)
                    setSosyal20Treshold(9)
                    setGenel20Treshold(35)

                    /*30 developement treshold*/
                    setDil30Treshold(10)
                    setInce30Treshold(7)
                    setKaba30Treshold(4)
                    setSosyal30Treshold(8)
                    setGenel30Treshold(30)

                    break
                case (age.userYear === 0 && age.userMonth === 8):
                    setDilScoreTreshold(15)
                    setInceScoreTreshold(11)
                    setKabaScoreTreshold(9)
                    setSosyalScoreTreshold(13)
                    setGenelGelisimTreshold(50)

                    /*20 developement treshold*/
                    setDil20Treshold(12)
                    setInce20Treshold(10)
                    setKaba20Treshold(7)
                    setSosyal20Treshold(10)
                    setGenel20Treshold(42)

                    /*30 developement treshold*/
                    setDil30Treshold(11)
                    setInce30Treshold(9)
                    setKaba30Treshold(6)
                    setSosyal30Treshold(10)
                    setGenel30Treshold(40)

                    break
                case (age.userYear === 0 && age.userMonth === 9):
                    setDilScoreTreshold(15)
                    setInceScoreTreshold(11)
                    setKabaScoreTreshold(10)
                    setSosyalScoreTreshold(15)
                    setGenelGelisimTreshold(53)

                    /*20 developement treshold*/
                    setDil20Treshold(13)
                    setInce20Treshold(11)
                    setKaba20Treshold(8)
                    setSosyal20Treshold(11)
                    setGenel20Treshold(45)

                    /*30 developement treshold*/
                    setDil30Treshold(12)
                    setInce30Treshold(10)
                    setKaba30Treshold(7)
                    setSosyal30Treshold(10)
                    setGenel30Treshold(42)

                    break
                case (age.userYear === 0 && age.userMonth === 10):
                    setDilScoreTreshold(16)
                    setInceScoreTreshold(11)
                    setKabaScoreTreshold(11)
                    setSosyalScoreTreshold(16)
                    setGenelGelisimTreshold(55)

                    /*20 developement treshold*/
                    setDil20Treshold(15)
                    setInce20Treshold(11)
                    setKaba20Treshold(9)
                    setSosyal20Treshold(13)
                    setGenel20Treshold(50)

                    /*30 developement treshold*/
                    setDil30Treshold(13)
                    setInce30Treshold(11)
                    setKaba30Treshold(8)
                    setSosyal30Treshold(11)
                    setGenel30Treshold(45)
                    break
                case (age.userYear === 0 && age.userMonth === 11):
                    setDilScoreTreshold(18)
                    setInceScoreTreshold(11)
                    setKabaScoreTreshold(12)
                    setSosyalScoreTreshold(17)
                    setGenelGelisimTreshold(61)

                    /*20 developement treshold*/
                    setDil20Treshold(15)
                    setInce20Treshold(11)
                    setKaba20Treshold(10)
                    setSosyal20Treshold(15)
                    setGenel20Treshold(53)

                    /*30 developement treshold*/
                    setDil30Treshold(14)
                    setInce30Treshold(11)
                    setKaba30Treshold(8)
                    setSosyal30Treshold(11)
                    setGenel30Treshold(42)

                    break
                case (age.userYear === 1 && age.userMonth === 0):
                    setDilScoreTreshold(19)
                    setInceScoreTreshold(11)
                    setKabaScoreTreshold(14)
                    setSosyalScoreTreshold(18)
                    setGenelGelisimTreshold(65)

                    /*20 developement treshold*/
                    setDil20Treshold(15)
                    setInce20Treshold(10)
                    setKaba20Treshold(10)
                    setSosyal20Treshold(15)
                    setGenel20Treshold(54)

                    /*30 developement treshold*/
                    setDil30Treshold(15)
                    setInce30Treshold(9)
                    setKaba30Treshold(9)
                    setSosyal30Treshold(14)
                    setGenel30Treshold(52)

                    break
                case (age.userYear === 1 && age.userMonth === 1):
                    setDilScoreTreshold(23)
                    setInceScoreTreshold(11)
                    setKabaScoreTreshold(17)
                    setSosyalScoreTreshold(22)
                    setGenelGelisimTreshold(71)

                    /*20 developement treshold*/
                    setDil20Treshold(17)
                    setInce20Treshold(11)
                    setKaba20Treshold(11)
                    setSosyal20Treshold(16)
                    setGenel20Treshold(57)

                    /*30 developement treshold*/
                    setDil30Treshold(15)
                    setInce30Treshold(11)
                    setKaba30Treshold(10)
                    setSosyal30Treshold(15)
                    setGenel30Treshold(53)
                    break
                case (age.userYear === 1 && age.userMonth >= 2) && (age.userYear === 1 && age.userMonth <= 3):
                    setDilScoreTreshold(24)
                    setInceScoreTreshold(15)
                    setKabaScoreTreshold(18)
                    setSosyalScoreTreshold(23)
                    setGenelGelisimTreshold(80)

                    /*20 developement treshold*/
                    setDil20Treshold(18)
                    setInce20Treshold(11)
                    setKaba20Treshold(12)
                    setSosyal20Treshold(17)
                    setGenel20Treshold(61)

                    /*30 developement treshold*/
                    setDil30Treshold(16)
                    setInce30Treshold(11)
                    setKaba30Treshold(11)
                    setSosyal30Treshold(16)
                    setGenel30Treshold(55)
                    break
                case (age.userYear === 1 && age.userMonth >= 4) && (age.userYear === 1 && age.userMonth <= 5):
                    setDilScoreTreshold(27)
                    setInceScoreTreshold(15)
                    setKabaScoreTreshold(19)
                    setSosyalScoreTreshold(25)
                    setGenelGelisimTreshold(89)

                    /*20 developement treshold*/
                    setDil20Treshold(23)
                    setInce20Treshold(11)
                    setKaba20Treshold(17)
                    setSosyal20Treshold(22)
                    setGenel20Treshold(71)

                    /*30 developement treshold*/
                    setDil30Treshold(18)
                    setInce30Treshold(11)
                    setKaba30Treshold(12)
                    setSosyal30Treshold(17)
                    setGenel30Treshold(61)
                    break
                case (age.userYear === 1 && age.userMonth >= 6) && (age.userYear === 1 && age.userMonth <= 7):
                    setDilScoreTreshold(30)
                    setInceScoreTreshold(16)
                    setKabaScoreTreshold(20)
                    setSosyalScoreTreshold(25)
                    setGenelGelisimTreshold(94)

                    /*20 developement treshold*/
                    setDil20Treshold(25)
                    setInce20Treshold(15)
                    setKaba20Treshold(18)
                    setSosyal20Treshold(24)
                    setGenel20Treshold(85)

                    /*30 developement treshold*/
                    setDil30Treshold(21)
                    setInce30Treshold(11)
                    setKaba30Treshold(15)
                    setSosyal30Treshold(20)
                    setGenel30Treshold(67)
                    break
                case (age.userYear === 1 && age.userMonth >= 8) && (age.userYear === 1 && age.userMonth <= 9):
                    setDilScoreTreshold(34)
                    setInceScoreTreshold(17)
                    setKabaScoreTreshold(21)
                    setSosyalScoreTreshold(28)
                    setGenelGelisimTreshold(100)

                    /*20 developement treshold*/
                    setDil20Treshold(27)
                    setInce20Treshold(15)
                    setKaba20Treshold(19)
                    setSosyal20Treshold(25)
                    setGenel20Treshold(89)

                    /*30 developement treshold*/
                    setDil30Treshold(24)
                    setInce30Treshold(15)
                    setKaba30Treshold(18)
                    setSosyal30Treshold(23)
                    setGenel30Treshold(80)
                    break
                case (age.userYear === 1 && age.userMonth >= 10) && (age.userYear === 1 && age.userMonth <= 11):
                    setDilScoreTreshold(36)
                    setInceScoreTreshold(17)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(30)
                    setGenelGelisimTreshold(105)

                    /*20 developement treshold*/
                    setDil20Treshold(29)
                    setInce20Treshold(15)
                    setKaba20Treshold(19)
                    setSosyal20Treshold(25)
                    setGenel20Treshold(93)

                    /*30 developement treshold*/
                    setDil30Treshold(25)
                    setInce30Treshold(15)
                    setKaba30Treshold(18)
                    setSosyal30Treshold(24)
                    setGenel30Treshold(85)
                    break
                case (age.userYear === 2 && age.userMonth >= 0) && (age.userYear === 2 && age.userMonth <= 2):
                    setDilScoreTreshold(38)
                    setInceScoreTreshold(18)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(30)
                    setGenelGelisimTreshold(110)

                    /*20 developement treshold*/
                    setDil20Treshold(34)
                    setInce20Treshold(17)
                    setKaba20Treshold(21)
                    setSosyal20Treshold(28)
                    setGenel20Treshold(100)

                    /*30 developement treshold*/
                    setDil30Treshold(29)
                    setInce30Treshold(15)
                    setKaba30Treshold(19)
                    setSosyal30Treshold(25)
                    setGenel30Treshold(93)
                    break
                case (age.userYear === 2 && age.userMonth >= 3) && (age.userYear === 2 && age.userMonth <= 5):
                    setDilScoreTreshold(40)
                    setInceScoreTreshold(19)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(31)
                    setGenelGelisimTreshold(115)

                    /*20 developement treshold*/
                    setDil20Treshold(36)
                    setInce20Treshold(17)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(30)
                    setGenel20Treshold(105)

                    /*30 developement treshold*/
                    setDil30Treshold(30)
                    setInce30Treshold(16)
                    setKaba30Treshold(20)
                    setSosyal30Treshold(25)
                    setGenel30Treshold(94)
                    break
                case (age.userYear === 2 && age.userMonth >= 6) && (age.userYear === 2 && age.userMonth <= 8):
                    setDilScoreTreshold(46)
                    setInceScoreTreshold(19)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(33)
                    setGenelGelisimTreshold(120)

                    /*20 developement treshold*/
                    setDil20Treshold(38)
                    setInce20Treshold(18)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(30)
                    setGenel20Treshold(110)

                    /*30 developement treshold*/
                    setDil30Treshold(34)
                    setInce30Treshold(17)
                    setKaba30Treshold(21)
                    setSosyal30Treshold(28)
                    setGenel30Treshold(100)

                    break
                case (age.userYear === 2 && age.userMonth >= 9) && (age.userYear === 2 && age.userMonth <= 11):
                    setDilScoreTreshold(47)
                    setInceScoreTreshold(20)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(33)
                    setGenelGelisimTreshold(125)

                    /*20 developement treshold*/
                    setDil20Treshold(40)
                    setInce20Treshold(19)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(31)
                    setGenel20Treshold(115)

                    /*30 developement treshold*/
                    setDil30Treshold(36)
                    setInce30Treshold(17)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(30)
                    setGenel30Treshold(105)
                    break
                case (age.userYear === 3 && age.userMonth >= 0) && (age.userYear === 3 && age.userMonth <= 2):
                    setDilScoreTreshold(48)
                    setInceScoreTreshold(20)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(34)
                    setGenelGelisimTreshold(127)

                    /*20 developement treshold*/
                    setDil20Treshold(40)
                    setInce20Treshold(19)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(31)
                    setGenel20Treshold(115)

                    /*30 developement treshold*/
                    setDil30Treshold(38)
                    setInce30Treshold(18)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(30)
                    setGenel30Treshold(110)
                    break
                case (age.userYear === 3 && age.userMonth >= 3) && (age.userYear === 3 && age.userMonth <= 5):
                    setDilScoreTreshold(49)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(129)

                    /*20 developement treshold*/
                    setDil20Treshold(47)
                    setInce20Treshold(20)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(33)
                    setGenel20Treshold(125)

                    /*30 developement treshold*/
                    setDil30Treshold(46)
                    setInce30Treshold(19)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(33)
                    setGenel30Treshold(120)
                    break
                case (age.userYear === 3 && age.userMonth >= 6) && (age.userYear === 3 && age.userMonth <= 8):
                    setDilScoreTreshold(51)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(132)

                    /*20 developement treshold*/
                    setDil20Treshold(47)
                    setInce20Treshold(20)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(33)
                    setGenel20Treshold(125)

                    /*30 developement treshold*/
                    setDil30Treshold(46)
                    setInce30Treshold(19)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(33)
                    setGenel30Treshold(120)
                    break
                case (age.userYear === 3 && age.userMonth >= 9) && (age.userYear === 3 && age.userMonth <= 11):
                    setDilScoreTreshold(52)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(135)

                    /*20 developement treshold*/
                    setDil20Treshold(48)
                    setInce20Treshold(20)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(34)
                    setGenel20Treshold(127)

                    /*30 developement treshold*/
                    setDil30Treshold(47)
                    setInce30Treshold(20)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(34)
                    setGenel30Treshold(125)
                    break
                case (age.userYear === 4 && age.userMonth >= 0) && (age.userYear === 4 && age.userMonth <= 6):
                    setDilScoreTreshold(54)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(137)

                    /*20 developement treshold*/
                    setDil20Treshold(51)
                    setInce20Treshold(21)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(35)
                    setGenel20Treshold(132)

                    /*30 developement treshold*/
                    setDil30Treshold(48)
                    setInce30Treshold(20)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(34)
                    setGenel30Treshold(127)
                    break
                case (age.userYear === 4 && age.userMonth >= 6) && (age.userYear === 4 && age.userMonth <= 11):
                    setDilScoreTreshold(56)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(140)

                    /*20 developement treshold*/
                    setDil20Treshold(52)
                    setInce20Treshold(21)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(35)
                    setGenel20Treshold(135)

                    /*30 developement treshold*/
                    setDil30Treshold(49)
                    setInce30Treshold(21)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(35)
                    setGenel30Treshold(129)
                    break
                case (age.userYear === 5 && age.userMonth >= 0) && (age.userYear === 5 && age.userMonth <= 6):
                    setDilScoreTreshold(58)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(142)

                    /*20 developement treshold*/
                    setDil20Treshold(54)
                    setInce20Treshold(21)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(35)
                    setGenel20Treshold(138)

                    /*30 developement treshold*/
                    setDil30Treshold(52)
                    setInce30Treshold(21)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(35)
                    setGenel30Treshold(135)
                    break
                case (age.userYear === 5 && age.userMonth >= 7) && (age.userYear === 5 && age.userMonth <= 11):
                    setDilScoreTreshold(59)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(145)

                    /*20 developement treshold*/
                    setDil20Treshold(56)
                    setInce20Treshold(21)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(35)
                    setGenel20Treshold(140)

                    /*30 developement treshold*/
                    setDil30Treshold(54)
                    setInce30Treshold(21)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(35)
                    setGenel30Treshold(137)
                    break
                case (age.userYear === 5 && age.userMonth === 12):
                    setDilScoreTreshold(59)
                    setInceScoreTreshold(21)
                    setKabaScoreTreshold(22)
                    setSosyalScoreTreshold(35)
                    setGenelGelisimTreshold(145)

                    /*20 developement treshold*/
                    setDil20Treshold(56)
                    setInce20Treshold(21)
                    setKaba20Treshold(22)
                    setSosyal20Treshold(35)
                    setGenel20Treshold(140)

                    /*30 developement treshold*/
                    setDil30Treshold(54)
                    setInce30Treshold(21)
                    setKaba30Treshold(22)
                    setSosyal30Treshold(35)
                    setGenel30Treshold(137)
                    break
            }
        }

    }


    /*const handleChange = (e) => {
        setSelectedDate(e.target.value)
    }*/

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

    /*const goToday = (e) => {
        e.preventDefault()
        console.log(selectedDate)
    }*/


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