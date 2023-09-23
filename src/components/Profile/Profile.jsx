import React, { useState } from 'react';
import profiLogo from '../../img/Profile.svg';
import logo from '../../img/LogoLight.svg'
import styles from './ProfileStyle/ProfileStyle.module.css';
import { NavLink } from 'react-router-dom';
import EditProfile from './EditProfile';

const Profile = () => {
  const [modalActive, setModalActive] = useState(true)

  return (
    <>
      <div className={styles.profile__platform}>
        <div className={styles.profile__left_content}>
          <span className={styles.profile_left_txt} align='center'>Account subscriptions</span>
          <div className={styles.subcribe__block}>
            <img src={profiLogo} alt="" className={styles.subcribe__logo}/>
            <h3 className={styles.subcribe__name}>qryow</h3>
          </div>
          <div className={styles.subcribe__block}>
            <img src={profiLogo} alt="" className={styles.subcribe__logo}/>
            <h3 className={styles.subcribe__name}>qryow</h3>
          </div>
          <div className={styles.subcribe__block}>
            <img src={profiLogo} alt="" className={styles.subcribe__logo}/>
            <h3 className={styles.subcribe__name}>qryow</h3>
          </div>
          <div className={styles.subcribe__block}>
            <img src={profiLogo} alt="" className={styles.subcribe__logo}/>
            <h3 className={styles.subcribe__name}>qryow</h3>
          </div>
          <div className={styles.subcribe__block}>
            <img src={profiLogo} alt="" className={styles.subcribe__logo}/>
            <h3 className={styles.subcribe__name}>qryow</h3>
          </div>
          <div className={styles.subcribe__block}>
            <img src={profiLogo} alt="" className={styles.subcribe__logo}/>
            <h3 className={styles.subcribe__name}>qryow</h3>
          </div>
          <div className={styles.subcribe__block}>
            <img src={profiLogo} alt="" className={styles.subcribe__logo}/>
            <h3 className={styles.subcribe__name}>qryow</h3>
          </div>
        </div>
        <div className={styles.profile__right_content}>
          <div className={styles.profile_content}>
            <img src={profiLogo} alt="" className={styles.profil_logo}/>
            <div className={styles.profile_left__content}>
              <div className={styles.editprofil}>
                <h2>qryow</h2>
                <button onClick={() => setModalActive(true)}>Edit profile</button>
              </div>
              <div className={styles.fol_lik_flow}>
                <h3>100 following</h3>
                <h3>100 folllowers</h3>
                <h3>100 likes</h3>
              </div>
              <h2 className={styles.this}><small>This is description for profile</small></h2>
            </div>
          </div><hr />
          <div className={styles.navLinks}>
            <NavLink className={styles.navlink} to="/videos">Videos</NavLink>
            <NavLink className={styles.navlink} to="/favorites">Favorites</NavLink>
            <NavLink className={styles.navlink} to="/liked">Liked</NavLink>
            <hr />
          </div>
          <div className={styles.profile_down_content}></div>
        </div>
      </div>
      <EditProfile active={modalActive} setActive={setModalActive} />
    </>
  )
}  

export default Profile;
