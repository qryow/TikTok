import React, { useState } from 'react';
import style from './ProfileStyle/ProfileStyle.module.css';
import { NavLink } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar'
import Subscriptions from '../UI/subscriptions/SubscriptionsList'
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';
import PremiumIcon from '../Premium/PremiumIcon';
import { useDarkMode } from '../DarkMode/DarkMode';

const Profile = () => {
  const [modalActive, setModalActive] = useState(false)
  const { currentAccount } = useSelector(state => state.account)
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <ProfileNavbar />
      <Subscriptions />
      <div className={isDarkMode ? `${style.profile__wrapper} ${style.profile__black}` : `${style.profile__wrapper}`}>
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
            <NavLink className={isDarkMode ? `${style.nav__title} ${style.nav__title_lighter}` : `${style.nav__title}`} to="/profile">
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
        <div className={styles.navLinks}>
          <NavLink className={styles.navlink} to="/myvideos">Videos</NavLink>
          <NavLink className={styles.navlink} to="reposts">Reposts</NavLink>
          <NavLink className={styles.navlink} to="/favorites">Favorites</NavLink>
          <NavLink className={styles.navlink} to="/liked">Liked</NavLink>
          <hr />
        </div>
        <div className={styles.profile_down_content}></div>
      </div>
    </div>
    <div className={styles.new_profil_platform}>
      <div className={styles.profil_logo_name}>
        <img src={profiLogo} alt="" />
        <h3>@qryow</h3>
      </div>
      <div className={styles.folowing}>
        <div className={styles.folow_liked}>
          <h3>100</h3>
          <span>following</span>
        </div>
        <div className={styles.folow_liked} id={styles.sa}>
          <h3 align='center'>100</h3>
          <span>followers</span>
        </div>
        <div className={styles.folow_liked}>
          <h3>100</h3>
          <span>likes</span>
        </div>
      </div>
      <div className={styles.info_edit}>
      <button>Edit profile</button>
      <b>This is description for profile</b>
      </div>
      <div className={styles.obj_platform}>
        <div className={styles.logo_obj}>
          <NavLink className={styles.navlink2} to="/myvideos"><img src={myvideo} alt="" /></NavLink>
          <NavLink className={styles.navlink2} to="/reposts"><img src={repost} alt="" /></NavLink>
          <NavLink className={styles.navlink2} to="/favorites"><img src={favoritelogo} alt="" /></NavLink>
          <NavLink className={styles.navlink2}to="/liked"><img src={likelogo} alt="" /></NavLink>
        </div>
      </div>
      <div className={styles.new_profil_centercontent}>
        <img src={chelik} alt="" />
        <h2>Upload your first video</h2>
        <span><small>Your videos will appear here</small></span>
      </div>
      <hr />
      <div className={styles.new_profil_downcontent}>
        <div>
          <img src={homelogo} alt="" className={styles.logo_links}/>
          <span>Home</span>
        </div>
        <div>
          <img src={searchlogo} alt="" className={styles.logo_links}/>
          <span>Discover</span>
        </div>
        <div className={styles.create__logo}>
          <img src={createlogo} alt="" className={styles.create_logo}/>
        </div>
        <div>
          <img src={chat} alt="" className={styles.logo_links}/>
          <span>Inbox</span>
        </div>
        <div>
          <img src={me} alt="" className={styles.logo_links}/>
          <span>Me</span>
        </div>
      </div>
      <EditProfile active={modalActive} setActive={setModalActive} />
    </>
  )
}  

export default Profile;
