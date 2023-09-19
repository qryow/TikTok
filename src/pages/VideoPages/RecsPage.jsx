import React from 'react'
import style from '../../components/Video/styles/Video.module.css'
import Navbar from '../../components/UI/Navbar'
import Video from '../../components/Video/Video'
import VideoInfo from '../../components/Video/VideoInfo'
import VideoButtons from '../../components/Video/VideoButtons'

const RecsPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <VideoInfo />
        <div className={style.content}>
          <Video />
          <VideoButtons />
        </div>
      </div>
    </>
  )
}

export default RecsPage