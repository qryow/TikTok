import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from '../pages/AccountPages/RegisterPage'
import LoginPage from '../pages/AccountPages/LoginPage'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default MainRouter