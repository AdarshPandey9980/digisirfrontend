import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from '../components/Hero'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import PaymentPage from '../components/PaymentPage'

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
