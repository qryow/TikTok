import React from 'react'
import style from '../styles/Video.module.css'

import HomeActive from '../../../img/HomeActive.svg';
import search from '../../../img/search icon.svg'
import add from '../../../img/plusMobile.svg'
import inbox from '../../../img/Message Stroke Icon.svg'
import account from '../../../img/Account Stroke Icon.svg'

const VideoMobileInfo = () => {
  return (
    <>
      <div className={style.mobile__navbar_wrapper}>
        <div className={style.mobile__navbar}>
          <div className={style.mobile__menu}>
            <div className={style.mobile__menu_block_home}>
              <img className={style.mobile__menu_home} src={HomeActive} alt="Home" />
              <h5 className={style.mobile__menu_home_text}>Home</h5>
            </div>
            <div className={style.mobile__menu_block_search}>
              <img className={style.mobile__menu_search} src={search} alt="search" />
              <h5 className={style.mobile__menu_text}>Discover</h5>
            </div>
            <div className={style.mobile__menu_add}>
              <img className={style.mobile__menu_img_add} src={add} alt="add video" />
            </div>
            <div className={style.mobile__menu_block}>
              <img className={style.mobile__menu_img} src={inbox} alt="inbox" />
              <h5 className={style.mobile__menu_text}>Inbox</h5>
            </div>
            <div className={style.mobile__menu_block}>
              <img className={style.mobile__menu_img} src={account} alt="account" />
              <h5 className={style.mobile__menu_text}>Me</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoMobileInfo