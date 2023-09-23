import React from 'react'
import style from '../UI/styles/UIComponents.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../img/LogoLight.svg'
import search from '../../img/Search.svg'
import add from '../../img/AddVideo.svg'
import domik from '../../img/domik.png'
import sob from '../../img/soobshenia.png'
const Navbar = () => {
  return (
    <>
    <div className={style.navbar_profil}>
      <div className={style.container}>
        <div className={style.nav__wrapper}>
          <div className={style.logo__wrapper}>
            <img className={style.logo} src={logo} alt="TikTok logo" />
          </div>
          <div className={style.menu}>
            <div className={style.search__wrapper} >
              <NavLink to="/search">
              <img className={style.search} src={search} alt="search"/>
              </NavLink>
            </div>
                <img src={sob} alt="" className={style.sob}/>
                <img src={domik} alt="" className={style.domik}/>
              <NavLink className={style.add_video__wrapper} to="/createVideo">
                <img className={style.add_video} src={add} alt="add video" />
              </NavLink>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    </>
  )
}

export default Navbar