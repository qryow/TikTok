import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from '../pages/AccountPages/RegisterPage'
import ActivatePage from '../pages/AccountPages/ActivatePage'
import LoginPage from '../pages/AccountPages/LoginPage'
import LogoutPage from '../pages/AccountPages/LogoutPage'

import FollowingPage from '../pages/VideoPages/FollowingPage'
import RecsPage from '../pages/VideoPages/RecsPage'
import SearchPage  from '../pages/SeachPages/SearchPage'
import SearchPageAccount from '../pages/SeachPages/SearchPageAccount'
import SearchPageHashtags from '../pages/SeachPages/SearchPageHashtags'

import Create from  '../pages/VideoPages/CreateVideoPage'
import InfoPage from '../pages/InfoPages/InfoPage'
import PremiumPage from '../pages/PremiumPages/PremiumPage'
import ProfilPages from '../pages/ProfilPages/ProfilPages'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/activate' element={<ActivatePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/logout' element={<LogoutPage />} />
      <Route path='/' element={<RecsPage />} />
      <Route path='/following' element={<FollowingPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/search-accounts' element={<SearchPageAccount />} />
      <Route path='/search-hashtags' element={<SearchPageHashtags />} />
      <Route path='/create-video' element={<Create/>}/>
      <Route path='/information' element={<InfoPage/>}/>
      <Route path='/premium' element={<PremiumPage/>}/>
      <Route path='/profile' element={<ProfilPages/>}/>
    </Routes>
  )
}

export default MainRouter