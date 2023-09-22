import React from 'react';
import profiLogo from '../../img/Profile.svg';
import logo from '../../img/LogoLight.svg'
import styles from './ProfileStyle/ProfileStyle.module.css';
import { NavLink } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar'
import myvideo from '../../img/my_video.png'
import favoritelogo from '../../img/izbranuye.png'
import likelogo from '../../img/layki.png'
import repost from '../../img/Repost.svg'
import chelik from '../../img/chelik.png'
import homelogo from '../../img/Home Solid Icon.png'
import searchlogo from '../../img/Discover.png'
import createlogo from '../../img/Button Shape.png';
import chat from '../../img/Inbox.png'
import me from '../../img/Me.png'
const Profile = () => {
  return (
    <>
    <ProfileNavbar/>
    <div className={styles.px600navbar}>
      <img src={logo} alt="" className={styles.profilelogo}/>
      <img src={profiLogo} alt="" className={styles.logo_tiktok}/>
    </div>
    <hr />
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
              <button>Edit profile</button>
            </div>
            <div className={styles.fol_lik_flow}>
              <h3>100 following</h3>
              <h3>100 followers</h3>
              <h3>100 likes</h3>
            </div>
            <h2 className={styles.this}><small>This is description for profile</small></h2>
          </div>
        </div>
        <div className={styles.navLinks}>
          <NavLink className={styles.navlink} to="/videos">Videos</NavLink>
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
          <NavLink className={styles.navlink2} to="/videos"><img src={myvideo} alt="" /></NavLink>
          <NavLink className={styles.navlink2} ><img src={repost} alt="" /></NavLink>
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
    </div>
    </>
  )
}  

export default Profile;
