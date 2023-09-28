import React, { useState } from 'react';
import style from './ProfileStyle/ProfileStyle.module.css';
import { NavLink } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar'
import Subscriptions from '../UI/subscriptions/SubscriptionsList'
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';
import { useDarkMode } from '../DarkMode/DarkMode'; 
import PremiumIcon from '../Premium/PremiumIcon';

const ProfileReposts = () => {
  const [modalActive, setModalActive] = useState(false)
  const { currentAccount } = useSelector(state => state.account)
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  
  return (
    <>
      <ProfileNavbar />
      <Subscriptions />
      <div className={isDarkMode ? `${style.profile__wrapper} ${style.profile__wrapper_lighter}` : `${style.profile__wrapper}`}>
        <div className={style.profile__content}>


          { currentAccount && (
            <div className={style.profile__info}>
              <div className={style.profile__logo_wrapper}>
                <img className={style.profile__logo} src={ currentAccount.avatar} alt="profile logo" />
              </div>

              <div className={style.profile__info_content}>
              <div className={style.premiumIcon}>
                <h4 className={style.profile__name}> { currentAccount.name } </h4>
                <PremiumIcon />
                </div>
                
                <div className={style.subscriptions}>
                  <div className={style.following}>
                    <p className={style.follow__text}> <span className={style.count}>100</span> following</p>
                  </div>
                  <div className={style.following}>
                    <p className={style.follow__text}> <span className={style.count}>100</span> followers</p>
                  </div>
                  <div className={style.following}>
                    <p className={style.follow__text}> <span className={style.count}>100</span> posts</p>
                  </div>
                </div>

                <p className={style.profile__desc}> {currentAccount.description} </p>
              </div>

              <div className={style.btn__wrapper}>
                <button className={isDarkMode ? `${style.edit__profile__btn} ${style.edit__profile__btn_lighter}` : `${style.edit__profile__btn}`} onClick={() => setModalActive(true)}>Edit profile</button>
              </div>
            </div>
          )}

          <div className={style.navigation}>
            <NavLink className={style.nav__title} to="/profile">
              Videos
            </NavLink>
            <NavLink className={style.nav__title} to="/profile-favorites">
              Favorites
            </NavLink>
            <NavLink className={isDarkMode ? `${style.nav__title} ${style.nav__title_lighter}` : `${style.nav__title}`} to="/profile-reposts">
              Reposts
            </NavLink>
            <NavLink className={style.nav__title} to="/profile-likes">
              Likes
            </NavLink>
          </div>
          
        </div>
      </div>
      <EditProfile active={modalActive} setActive={setModalActive} />
    </>
  )
}  

export default ProfileReposts;
