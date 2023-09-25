import React from 'react'
import style from '../UI/styles/UIComponents.module.css'
import { NavLink, useNavigate } from 'react-router-dom'


import logo from '../../img/LogoLight.svg'
import search from '../../img/Search.svg'
import add from '../../img/AddVideo.svg'
import home from '../../img/HomeIcon.svg'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const { currentAccount } = useSelector(state => state.account)
  const navigate = useNavigate();
  
  return (
    <>
      { currentAccount && (
        <div className={style.navbar}>
          <div className={style.container}>
            <div className={style.nav__wrapper}>
              <div className={style.logo__wrapper}>
                <img className={style.logo} src={logo} alt="TikTok logo" />
              </div>

              <div className={style.menu}>
                <div className={style.search__wrapper} onClick={() => navigate('/search')} >
                  <img className={style.search} src={search} alt="search" onClick={() => navigate('/search')}/>
                </div>
                <div className={style.home__wrapper} onClick={() => navigate('/')}>
                  <img className={style.search} src={home} alt="add video" />
                </div>
                <div className={style.add_video__wrapper} onClick={() => navigate('/create-video')}>
                  <img className={style.add_video} src={add} alt="add video" />
                </div>
                <div className={style.profile__wrapper} >
                  <img className={style.profile__logo} src={ currentAccount.avatar } alt="profile" />
                </div>
              </div>
            </div>
          </div>
        </div> 
      )}
    </>
  )
}

export default Navbar