import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from '../pages/AccountPages/RegisterPage'
import LoginPage from '../pages/AccountPages/LoginPage'
import FollowingPage from '../pages/VideoPages/FollowingPage'
import RecsPage from '../pages/VideoPages/RecsPage'
import SearchPage  from '../pages/SeachPages/SearchPage'
import AcountPage from '../pages/SeachPages/AcountPage'
import VideosPage from '../pages/SeachPages/VideosPage'
import HashtagsPage from '../pages/SeachPages/HashtagsPage'
import Create from  '../pages/VideoPages/CreateVideoPage'
import ProfilPages from '../pages/ProfilPages/ProfilPages'
import ForGoodPage from '../pages/addaptionalSitesPages/ForGoodPage'
import ForgoodAcardions from '../components/additional sites/ForgoodAcardions'
const MainRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/following' element={<FollowingPage />} />
      <Route path='/' element={<RecsPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/acount' element={<AcountPage/>}/>
      <Route path='/video' element={<VideosPage/>} />
      <Route path='/hashtag' element={<HashtagsPage/>}/>
      <Route path='/createVideo' element={<Create/>}/>
      <Route path='/profil' element={<ProfilPages/>}/>
      <Route path='/forgood' element={<ForGoodPage/>}/>
      <Route path='/acardion' element={<ForgoodAcardions/>}/>
    </Routes>
  )
}

export default MainRouter