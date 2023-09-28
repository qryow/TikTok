import React, { useState } from 'react'
import style from '../UI/styles/UIComponents.module.css'
import { NavLink, useNavigate } from 'react-router-dom'


import logo from '../../img/LogoLight.svg'
import search from '../../img/Search.svg'
import add from '../../img/AddVideo.svg'
import home from '../../img/HomeIcon.svg'
import { useSelector } from 'react-redux'
import { useDarkMode } from '../DarkMode/DarkMode'; 

import lightLogo from '../../image/lightLogo.svg';
import lightSearch from '../../image/LightSearch.svg';
import lightHome from '../../image/lightHome.svg';
import lightAdd from '../../image/lightAdd.svg';
import AccountInfoModal from '../UI/AccountInfoModal'


const Navbar = () => {
  const [modalActive, setModalActive] = useState(false)
  const { currentAccount } = useSelector(state => state.account)
  const navigate = useNavigate();
  
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 
  return (
    <>
      { currentAccount && (
        <div className={isDarkMode ? `${style.navbar} ${style.to__black}` : `${style.navbar}`}>
          <div className={style.container}>
            <div className={style.nav__wrapper}>
              <div className={style.logo__wrapper}>
                <img className={style.logo} src={isDarkMode ? lightLogo : logo} alt="TikTok logo" />
              </div>

              <div className={style.menu}>
                <div className={style.search__wrapper} onClick={() => navigate('/search')} >
                  <img className={style.search} src={isDarkMode ? lightSearch : search} alt="search" onClick={() => navigate('/search')}/>
                </div>
                <div className={style.home__wrapper} onClick={() => navigate('/')}>
                  <img className={style.search} src={isDarkMode ? lightHome : home} alt="add video" />
                </div>
                <div className={style.add_video__wrapper} onClick={() => navigate('/create-video')}>
                  <img className={style.add_video} src={isDarkMode ? lightAdd : add} alt="add video" />
                </div>
                <div className={style.profile__wrapper} >
                <div  onClick={() => setModalActive(true)}>
                  <img className={style.profile__logo} src={ currentAccount.avatar } alt='profile' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
        </div> 
      )}
      <AccountInfoModal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Navbar