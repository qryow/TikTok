import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from '../pages/AccountPages/RegisterPage'
import ActivatePage from '../pages/AccountPages/ActivatePage'
import LoginPage from '../pages/AccountPages/LoginPage'
import LogoutPage from '../pages/AccountPages/LogoutPage'
import ChangePasswordPage from '../pages/AccountPages/ChangePasswordPage'
import DeleteAccountPage from '../pages/AccountPages/DeleteAccountPage'
import ForgotPasswordPage from '../pages/AccountPages/ForgotPasswordPage'

import FollowingPage from '../pages/VideoPages/FollowingPage'
import RecsPage from '../pages/VideoPages/RecsPage'
import SearchPage  from '../pages/SeachPages/SearchPage'
import SearchPageAccount from '../pages/SeachPages/SearchPageAccount'
import SearchPageHashtags from '../pages/SeachPages/SearchPageHashtags'
import ForgotPasswordCompletePage from '../pages/AccountPages/ForgotPasswordCompletePage'

import Create from  '../pages/VideoPages/CreateVideoPage'
import InfoPage from '../pages/InfoPages/InfoPage'
import PremiumPage from '../pages/PremiumPages/PremiumPage'

import ProfilPages from '../pages/ProfilPages/ProfilPages'
import ForGoodPage from '../pages/addaptionalSitesPages/ForGoodPage'
import ForgoodAcardions from '../components/additional sites/ForgoodAcardions'
import ProfileFavorites from '../components/Profile/ProfileFavourites'
import ProfileReposts from '../components/Profile/ProfileReposts'
import ProfileLikes from '../components/Profile/ProfileLikes'
import Opasiti from '../components/opasiti sites/Opasiti'
import Safery from '../components/safery/Safery'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/activate' element={<ActivatePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/logout' element={<LogoutPage />} />
      <Route path='/change-password' element={<ChangePasswordPage />} />
      <Route path='/delete-account' element={<DeleteAccountPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      <Route path='/forgot-password-complete' element={<ForgotPasswordCompletePage />} />

      <Route path='/' element={<RecsPage />} />
      <Route path='/following' element={<FollowingPage />} />
      <Route path='/search' element={<SearchPage />} />
      {/*<Route path='/acount' element={<AcountPage/>}/>
      <Route path='/video' element={<VideosPage/>} />
      <Route path='/hashtag' element={<HashtagsPage/>}/>*/}
      <Route path='/createVideo' element={<Create/>}/>
      <Route path='/profil' element={<ProfilPages/>}/>
      <Route path='/forgood' element={<ForGoodPage/>}/>
      <Route path='/acardion' element={<ForgoodAcardions/>}/>

      <Route path='/search-accounts' element={<SearchPageAccount />} />
      <Route path='/search-hashtags' element={<SearchPageHashtags />} />
      <Route path='/create-video' element={<Create/>}/>
      <Route path='/information' element={<InfoPage/>}/>
      <Route path='/premium' element={<PremiumPage/>}/>

      <Route path='/profile' element={<ProfilPages/>}/>
      <Route path='/profile-favorites' element={<ProfileFavorites/>}/>
      <Route path='/profile-reposts' element={<ProfileReposts/>}/>
      <Route path='/profile-likes' element={<ProfileLikes/>}/>

      <Route path='/opasiti' element={<Opasiti/>}/>
      <Route path='/safury' element={<Safery/>} />

    </Routes>
  )
}

export default MainRouter