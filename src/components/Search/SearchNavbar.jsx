import React from 'react'
import logo from '../../img/LogoLight.svg'
import profile from '../../img/Profile.svg'
import { NavLink } from 'react-router-dom'
import './style/SearchStyle.css'
const SearchNavbar = () => {
  return (
   <>
    <div className="search_navbar">
          <div className="logo__wrapper">
            <img className="logo" src={logo} alt="TikTok logo" />
          </div>
          <div className="search_platform">
            <input type="text" placeholder='search' className="search__input"/>
          </div>
          <div className="menu">
            <div className="profile__wrapper">
              <img className="profile__logo" src={profile} alt="profile"/>
            </div>
          </div>
    </div> 
    
        <div className='search__right_content'>
            <NavLink className="navlink"to="/video" >
              Video
            </NavLink>
            <NavLink className="navlink"to="/acount" >
              Acount
            </NavLink>
            <NavLink className="navlink" to="/hashtag" >
              Hashtags
            </NavLink>
        </div>
        <hr/>
   </>
  )
}

export default SearchNavbar