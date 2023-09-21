import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from '../pages/AccountPages/RegisterPage'
import ActivatePage from '../pages/AccountPages/ActivatePage'
import LoginPage from '../pages/AccountPages/LoginPage'
import FollowingPage from '../pages/VideoPages/FollowingPage'
import RecsPage from '../pages/VideoPages/RecsPage'
import SearchPage  from '../pages/SeachPages/SearchPage'
import AcountPage from '../pages/SeachPages/AcountPage'
import VideosPage from '../pages/SeachPages/VideosPage'
import HashtagsPage from '../pages/SeachPages/HashtagsPage'
import Create from  '../pages/VideoPages/CreateVideoPage'
import ProfilPages from '../pages/ProfilPages/ProfilPages'
const MainRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/activate' element={<ActivatePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/following' element={<FollowingPage />} />
      <Route path='/' element={<RecsPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/acount' element={<AcountPage/>}/>
      <Route path='/video' element={<VideosPage/>} />
      <Route path='/hashtag' element={<HashtagsPage/>}/>
      <Route path='/createVideo' element={<Create/>}/>
      <Route path='/profil' element={<ProfilPages/>}/>
    </Routes>
  )
}

export default MainRouter