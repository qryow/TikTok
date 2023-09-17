import React from 'react'
import MainRouter from './routing/MainRouter'
import Navbar from './components/UI/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRouter />
    </div>
  )
}

export default App