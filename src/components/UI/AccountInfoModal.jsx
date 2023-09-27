import React , {useState} from 'react'
import style from './styles/Modal.module.css'
import { useNavigate } from 'react-router-dom'
import { useDarkMode } from '../DarkMode/DarkMode'; 

import profile from '../../img/PersonModal.svg'
import home from '../../img/HomeModal.svg'
import like from '../../img/LikeModal.svg'
import favorite from '../../img/FavouriteModal.svg'
import darkmode from '../../img/darkMode.png'
import lightmode from '../../img/lightMode.png'

import profileDark from '../../img/PersonModalDark.svg'
import homeDark from '../../img/HomeModalDark.svg'
import likeDark from '../../img/LikeModalDark.svg'
import favDark from '../../img/FavModalDark.svg'


const AccountInfoModal = ({ active, setActive }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const navigate = useNavigate();

  return (
    <div className={ active ? `${style.modal} ${style.active}` : `${style.modal}` } onClick={() => setActive(false)}>
      <div className={`${style.modal__content} ${active ? style.active : ''} ${isDarkMode ? style.modal__content_dark : ''}`} onClick={e => e.stopPropagation()}>

        <div className={style.fields}>
          <div className={style.one__field} onClick={() => navigate('/profile')}>
            <img className={style.field__icon_profile} src={isDarkMode ? profileDark : profile} alt="profile" />
            <h4 className={isDarkMode ? `${style.field__title_dark}` : `${style.field__title}`}>View Profile</h4>
          </div>
          <div className={style.one__field} onClick={() => navigate('/')}>
            <img className={style.field__icon_home} src={isDarkMode ? homeDark : home} alt="home" />
            <h4 className={isDarkMode ? `${style.field__title_dark}` : `${style.field__title}`}>Home</h4>
          </div>
          <div className={style.one__field} onClick={() => navigate('/profile-likes')}>
            <img className={style.field__icon} src={isDarkMode ? likeDark : like} alt="liked" />
            <h4 className={isDarkMode ? `${style.field__title_dark}` : `${style.field__title}`}>Liked</h4>
          </div>
          <div className={style.one__field} onClick={() => navigate('/profile-favorites')}>
            <img className={style.field__icon_fav} src={isDarkMode ? favDark : favorite} alt="favorites" />
            <h4 className={isDarkMode ? `${style.field__title_fav_dark}` : `${style.field__title_fav}`}>Favorites</h4>
          </div>
          <label  class={style.switch}>
            <input onClick={toggleDarkMode} type="checkbox" />
            <span className={`${style.slider} ${style.round}`}></span>
          </label>
        </div>

      </div>
    </div>
  )
}

export default AccountInfoModal