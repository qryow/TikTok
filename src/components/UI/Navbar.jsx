import React, { useState, useEffect } from 'react'
import style from './styles/UIComponents.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { getProfile } from '../../store/account/AccountAction'
import { useSelector, useDispatch } from 'react-redux'
import { useDarkMode } from '../DarkMode/DarkMode';
import '../../index.css'

import logo from '../../img/LogoLight.svg'
import search from '../../img/Search.svg'
import inbox from '../../img/Inbox.svg'
import add from '../../img/AddVideo.svg'

import lightLogo from '../../image/lightLogo.svg';
import lightSearch from '../../image/LightSearch.svg';
import lightInbox from '../../image/lightInbox.svg';
import lightAdd from '../../image/lightAdd.svg';

import Modal from './AccountInfoModal'

const Navbar = () => {
  const [modalActive, setModalActive] = useState(false)
  const { currentAccount } = useSelector(state => state.account);
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  
  return (
    <>
      { currentAccount && (
        <div className={isDarkMode ? `${style.navbar} ${style.to__black}` : `${style.navbar}`}>
          <div className={style.container}>
            <div className={style.nav__wrapper}>
              <div className={style.logo__wrapper}>
                <img className={style.logo} src={isDarkMode ? lightLogo : logo} alt="TikTok logo" />
              </div>
              <div className={style.navigation}>
                <NavLink className={isDarkMode ? `${style.nav__title} ${style.to__white}`: `${style.nav__title}`} to="/following">
                  Following
                </NavLink>
                <NavLink className={isDarkMode ? `${style.nav__title} ${style.to__white}`: `${style.nav__title}`} to="/">
                  For You
                </NavLink>
              </div>
              <div className={style.menu}>
                <div className={style.search__wrapper} onClick={() => navigate('/search')} >
                  <img className={style.search} src={isDarkMode ? lightSearch : search} alt="search" onClick={() => navigate('/search')}/>
                </div>
                <div className={style.inbox__wrapper} onClick={() => navigate('/inbox')}>
                  <img className={style.inbox} src={isDarkMode ? lightInbox : inbox} alt="inbox" />
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
      )}
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Navbar