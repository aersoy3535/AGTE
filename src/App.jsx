import { useState } from 'react'
import './App.css'
import Modal from './Components/Modal'
import AgeInput from './Components/AgeInput'
import AppContext, { AppProvider } from './Context'
import { useContext } from 'react'
import Enquiry from './Components/Enquiry'

function App() {

  const { accepted } = useContext(AppContext)
  const { isCalculated } = useContext(AppContext)

  return (
    <main>

    {accepted && <Modal />}
    {isCalculated ? null : <AgeInput />}
    {isCalculated ? <Enquiry /> : null}
    </main>
  )
}

export default App
