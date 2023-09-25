import React from 'react'

import Video from './Video'
import play from '../../img/play.svg'

const VideoPlayer = ({ videoElem, isPlaying, setIsPlaying}) => {

  const PlayPause = ()=>
  {
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      {/*{isPlaying ? <img src={play} onClick={PlayPause}/> : <Video onClick={PlayPause} />}*/}
      {isPlaying ? <img src={play} onClick={PlayPause}/> : <img src={play} onClick={PlayPause}/>}
    </div>
  )
}

export default VideoPlayer