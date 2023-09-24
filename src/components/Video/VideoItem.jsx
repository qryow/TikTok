import React from 'react'
import style from './styles/VideoItem.module.css'

import VideoInfo from './OneVideo/VideoInfo'
import Video from './OneVideo/Video'
import VideoButtons from './OneVideo/VideoButtons'

const VideoItem = () => {
  return (
    <div className={style.video__item}>
      <div className={style.video__item_wrapper}>
        <VideoInfo />
        <div className={style.wrap}>
          <Video />
          <VideoButtons />
        </div>
      </div>
    </div>
  )
}

export default VideoItem