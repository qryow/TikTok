import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style/SearchStyle.module.css'
import { useDarkMode } from '../DarkMode/DarkMode';

const SearchList = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={isDarkMode ? `${style.search_list__wrapper} ${style.search_list__wrapper_lighter}` : `${style.search_list__wrapper}`}>
        <div className={style.search__block}>

          <div className={style.navigation}>
            <NavLink className={isDarkMode ? `${style.nav__title} ${style.nav__title_lighter}` : `${style.nav__title}`} to="/search">
              Videos
            </NavLink>
            <NavLink className={isDarkMode ? `${style.nav__title} ${style.nav__title_lighter}` : `${style.nav__title}`} to="/search-accounts">
              Accounts
            </NavLink>
            <NavLink className={isDarkMode ? `${style.nav__title} ${style.nav__title_lighter}` : `${style.nav__title}`} to="/search-hashtags">
              Hastags
            </NavLink>
          </div>

        </div>
      </div>
    </>
  )
}

export default SearchList