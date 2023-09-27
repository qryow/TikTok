import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import style from './style/SearchStyle.module.css'

import logo from '../../img/LogoLight.svg'
import profile from '../../img/Profile.svg'
import search from '../../img/Search.svg'
import home from '../../img/HomeIcon.svg'
import { NavLink } from 'react-router-dom'


const SearchNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.nav__wrapper}>
            <div className={style.logo__wrapper}>
              <img className={style.logo} src={logo} alt="TikTok logo" />
            </div>
            
            <div className={style.input__wrapper}>
            <input
              className={style.search__input}
              placeholder='Search'
              type="text"
            />

              <div className={style.search__wrapper} onClick={() => navigate('/search')} >
                <img className={style.search} src={search} alt="search" onClick={() => navigate('/search')}/>
              </div>
            </div>

            <div className={style.menu}>
            <div className={style.home__wrapper} >
                <NavLink to="/">
                <img className={style.profile__logo} src={home} alt="home" />
                </NavLink>
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
    </>
  )
}

export default SearchNavbar