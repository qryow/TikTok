import React, { useState } from 'react'
import style from './styles/Video.module.css'

import logo from '../../img/Profile.svg'
import subscribe from '../../img/Subscribe.svg'

const VideoInfo = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeClick = () => {
    setSubscribed(!subscribed);
  };


  return (
    <>
      <div className={style.info__wrapper}>
        <div className={style.info__block}>

          <div className={style.info__logo}>
            <img className={style.logo} src={logo} alt="" />
            <img className={style.subscribe} onClick={handleSubscribeClick} src={subscribed ? '' : subscribe} alt="click again" />
          </div>

          <div className={style.info__text}>
            <h4 className={style.acc__name}>masteroogway</h4>
            <p className={style.video__subtitle}>Why is it so small?</p>

            <div className={style.hashtags}>
              <a className={style.hashtag} href="/">#car </a>
              <a className={style.hashtag} href="/">#jdm </a>
              <a className={style.hashtag} href="/">#japan </a>
              <a className={style.hashtag} href="/">#skyline </a>
              <a className={style.hashtag} href="/">#gtr34 </a>
              <a className={style.hashtag} href="/">#nissan </a>
              <a className={style.hashtag} href="/">#edit </a>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default VideoInfo