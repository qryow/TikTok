import React, { useState } from 'react'
import style from '../styles/Video.module.css'

import logo from '../../../img/Profile.svg'
import subscribe from '../../../img/Subscribe.svg'

const VideoInfo = ({ post }) => {
  const [subscribed, setSubscribed] = useState(false);

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
            <h4 className={style.acc__name}> {post.user} </h4>
            <p className={style.video__subtitle}> {post.title} </p>

            <div className={style.hashtags}>
              <a className={style.hashtag} href={post.categories}> {post.categories} </a>
            </div>
          </div>


        </div>
    </>
  )
}

export default VideoInfo