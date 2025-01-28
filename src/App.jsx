import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from '../components/Hero'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import PaymentPage from '../components/PaymentPage'
import InstituteSetup from '../components/institutes/InstitueSetup'
import InstituteDashboard from '../components/institutes/InstituteDashboard'
import InstituteLoginForm from '../components/institutes/InstituteLogin'
import StudentLogin from '../components/students/StudentLogin'
import StudentRegister from '../components/students/StudentRegister'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path='/payment' element={<PaymentPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
