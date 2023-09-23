import React from 'react'
import style from '../../components/Video/styles/Video.module.css'
import Navbar from '../../components/UI/Navbar'
import Video from '../../components/Video/Video'
import VideoInfo from '../../components/Video/VideoInfo'
import VideoMobileInfo from '../../components/Video/MobileComponents/VideoMobileInfo'
import VideoButtons from '../../components/Video/VideoButtons'
import MobileButtons from '../../components/Video/MobileComponents/MobilleButtons'

const RecsPage = () => {
  return (
    <>
      <Navbar />
      <div className={style.wrap}>
        <VideoInfo />
        <div className={style.content}>
          <Video />
          <MobileButtons />
          <VideoButtons />
          <VideoMobileInfo />
        </div>
      </div>
      <div className={style.wrap}>
        <VideoInfo />
        <div className={style.content}>
          <Video />
          <MobileButtons />
          <VideoButtons />
          <VideoMobileInfo />
        </div>
      </div>
    </>
  )
}

export default RecsPage