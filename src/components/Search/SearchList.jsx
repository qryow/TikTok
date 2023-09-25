import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style/SearchStyle.module.css'

const SearchList = () => {
  return (
    <>
      <div className={style.search_list__wrapper}>
        <div className={style.search__block}>

          <div className={style.navigation}>
            <NavLink className={style.nav__title} to="/search">
              Videos
            </NavLink>
            <NavLink className={style.nav__title} to="/search-accounts">
              Accounts
            </NavLink>
            <NavLink className={style.nav__title} to="/search-hashtags">
              Hastags
            </NavLink>
          </div>

        </div>
      </div>
    </>
  )
}

export default SearchList