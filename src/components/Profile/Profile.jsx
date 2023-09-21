import React from 'react';
import profiLogo from '../../img/Profile.svg';
import './ProfileStyle/ProfileStyle.css';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='profile__platform'>
      <div className="profile__left_content">
        <span className='profile_left_txt' align='center'>Account subscriptions</span>
        <div className='subcribe__block'>
          <img src={profiLogo} alt="" className='subcribe__logo'/>
          <h3 className='subcribe__name'>qryow</h3>
        </div>
        <div className='subcribe__block'>
          <img src={profiLogo} alt="" className='subcribe__logo'/>
          <h3 className='subcribe__name'>qryow</h3>
        </div>
        <div className='subcribe__block'>
          <img src={profiLogo} alt="" className='subcribe__logo'/>
          <h3 className='subcribe__name'>qryow</h3>
        </div>
        <div className='subcribe__block'>
          <img src={profiLogo} alt="" className='subcribe__logo'/>
          <h3 className='subcribe__name'>qryow</h3>
        </div>
        <div className='subcribe__block'>
          <img src={profiLogo} alt="" className='subcribe__logo'/>
          <h3 className='subcribe__name'>qryow</h3>
        </div>
        <div className='subcribe__block'>
          <img src={profiLogo} alt="" className='subcribe__logo'/>
          <h3 className='subcribe__name'>qryow</h3>
        </div>
        <div className='subcribe__block'>
          <img src={profiLogo} alt="" className='subcribe__logo'/>
          <h3 className='subcribe__name'>qryow</h3>
        </div>
      </div>
      <div className="profile__right_content">
        <div className="profile_content">
          <img src={profiLogo} alt="" className='profil_logo'/>
          <div className='profile_left__content'>
            <div className='editprofil'>
              <h2>qryow</h2>
              <button>Edit profile</button>
            </div>
            <div className='fol_lik_flow'>
              <h3>100 following</h3>
              <h3>100 folllowers</h3>
              <h3>100 likes</h3>
            </div>
            <h2 className='this'><small>This is description for profile</small></h2>
          </div>
        </div><hr />
        <div className='nav-links'>
          <NavLink className="navlink" to="/videos">Videos</NavLink>
          <NavLink className="navlink" to="/favorites">Favorites</NavLink>
          <NavLink className="navlink" to="/liked">Liked</NavLink>
          <hr />
        </div>
        <div className='profile_down_content'></div>
      </div>
    </div>
  )
}

export default Profile;
