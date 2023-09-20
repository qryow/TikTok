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
import Create from '../pages/VideoPages/Create'


const MainRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/following' element={<FollowingPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/acount' element={<AcountPage/>}/>
      <Route path='/video' element={<VideosPage/>} />
      <Route path='/hashtag' element={<HashtagsPage/>}/>
      <Route path='/' element={<RecsPage />} />
      <Route path='/createVideo' element={<Create />} />
    </Routes>
  )
}

export default MainRouter