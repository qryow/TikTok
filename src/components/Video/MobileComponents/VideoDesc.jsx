import React, { useState } from 'react'
import style from '../styles/Video.module.css'

const VideoInfo = () => {

  return (
    <>
      <div className={style.mobile_info__wrapper}>
        <div className={style.info__block}>

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