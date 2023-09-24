import React from 'react'
import style from './styles/UIComponents.module.css'
import { NavLink, useNavigate } from 'react-router-dom'

import logo from '../../img/LogoLight.svg'
import search from '../../img/Search.svg'
import inbox from '../../img/Inbox.svg'
import add from '../../img/AddVideo.svg'
import profile from '../../img/Profile.svg'

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.nav__wrapper}>
          <div className={style.logo__wrapper}>
            <img className={style.logo} src={logo} alt="TikTok logo" />
          </div>
          <div className={style.navigation}>
            <NavLink className={style.nav__title} to="/following">
              Following
            </NavLink>
            <NavLink className={style.nav__title} to="/">
              For You
            </NavLink>
          </div>
          <div className={style.menu}>
            <div className={style.search__wrapper} onClick={() => navigate('/search')} >
              <img className={style.search} src={search} alt="search" onClick={() => navigate('/search')}/>
            </div>
            <div className={style.inbox__wrapper} onClick={() => navigate('/inbox')}>
              <img className={style.inbox} src={inbox} alt="inbox" />
            </div>
            <div className={style.add_video__wrapper} onClick={() => navigate('/create-video')}>
              <img className={style.add_video} src={add} alt="add video" />
            </div>
            <div className={style.profile__wrapper} >
              <NavLink to="/profile">
              <img className={style.profile__logo} src={profile} alt="profile" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Navbar