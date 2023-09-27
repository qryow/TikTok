import React, { useState } from 'react'
import style from '../styles/Video.module.css'
import { useDarkMode } from '../../DarkMode/DarkMode'
import logo from '../../../img/Profile.svg'
import subscribe from '../../../img/Subscribe.svg'

const VideoInfo = ({ post }) => {
  const [subscribed, setSubscribed] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const handleSubscribeClick = () => {
    setSubscribed(!subscribed);
  };


  return (
    <>
        <div className={style.info__block}>

          <div className={style.info__logo}>
            <img className={style.logo} src={logo} alt="" />
            <img className={style.subscribe} onClick={handleSubscribeClick} src={subscribed ? '' : subscribe} alt="click again" />
          </div>

          <div className={style.info__text}>
            <h4 className={isDarkMode ? `${style.acc__name} ${style.acc__name_lighter}` : `${style.acc__name}`}> {post.user} </h4>
            <p className={isDarkMode ? `${style.video__subtitle} ${style.video__subtitle_lighter}` : `${style.video__subtitle}`}> {post.title} </p>

            <div className={style.hashtags}>
              <a className={style.hashtag} href={post.categories}> {post.categories} </a>
            </div>
          </div>


        </div>
    </>
  )
}

export default VideoInfo