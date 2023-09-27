import React from 'react'
import style from './styles/VideoItem.module.css'

import VideoInfo from './OneVideo/VideoInfo'
import Video from './OneVideo/Video'
import VideoButtons from './OneVideo/VideoButtons'

const VideoItem = ({ post }) => {
  return (
    <div className={style.video__item}>
      <div className={style.video__item_wrapper}>
        <VideoInfo post={post} />
        <div className={style.wrap}>
          <Video post={post} />
          <VideoButtons post={post} />
        </div>
      </div>
    </div>
  )
}

export default VideoItem