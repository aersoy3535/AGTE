import './App.css'
import Modal from './Components/Modal'
import Form from './Components/Form'
import Enquiry from './Components/Enquiry'
import AgeInput from './Components/AgeInput'
import LastForm from './Components/LastForm'
import ChartPage from './Components/ChartPage'
import AppContext, { AppProvider } from './Context'
import { useContext } from 'react'

function App() {

  const { accepted,isCalculated, formFilled, isTerminated, secondFormFilled } = useContext(AppContext)

  return (
    
    <main>
    {accepted && <Modal />}
    {formFilled && <Form/>}
    {isCalculated ? null : <AgeInput />}
    {isCalculated ? <Enquiry /> : null}
    {isTerminated ? <LastForm /> : null}
    {secondFormFilled ? <ChartPage/> : null}
    </main>
   
  )
}

export default App
