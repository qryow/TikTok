import React, { useState } from 'react';
import style from './ProfileStyle/ProfileStyle.module.css';
import { NavLink } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar'
import Subscriptions from '../UI/subscriptions/SubscriptionsList'
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [modalActive, setModalActive] = useState(false)
  const { currentAccount } = useSelector(state => state.account)

  return (
    <>
      <ProfileNavbar />
      <Subscriptions />
      <div className={style.profile__wrapper}>
        <div className={style.profile__content}>


          { currentAccount && (
            <div className={style.profile__info}>
              <div className={style.profile__logo_wrapper}>
                <img className={style.profile__logo} src={ currentAccount.avatar} alt="profile logo" />
              </div>

              <div className={style.profile__info_content}>
                <h4 className={style.profile__name}> { currentAccount.name } </h4>
                
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
                <button className={style.edit__profile__btn} onClick={() => setModalActive(true)}>Edit profile</button>
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
            <NavLink className={style.nav__title} to="/profile-reposts">
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

export default Profile;
