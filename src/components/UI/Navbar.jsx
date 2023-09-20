import React from 'react'
import style from './styles/UIComponents.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../img/LogoLight.svg'
import search from '../../img/Search.svg'
import add from '../../img/AddVideo.svg'
import profile from '../../img/Profile.svg'

const Navbar = () => {
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
            <div className={style.search__wrapper}>
              <img className={style.search} src={search} alt="search" to="/search"/>
            </div>
              <NavLink className={style.add_video__wrapper} to="/createVideo">
                <img className={style.add_video} src={add} alt="add video" />
              </NavLink>
            <div className={style.profile__wrapper}>
              <img className={style.profile__logo} src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Navbar