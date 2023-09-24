import React from 'react'
import { useSelector } from 'react-redux'
import style from '././styles/VideoItem.module.css'
import VideoItem from '../../components/Video/VideoItem'

const VideoList = () => {
  const { posts, loading } = useSelector(state => state.posts)
  console.log(posts)

  //const [visibleIndex, setVisibleIndex] = useState(0);
  //* после получения всех видео сделать анимацию скролла с помощью индексов 


  return (
    <>
      <div className={style.video__list}>

        <VideoItem />
        <VideoItem />
        
      </div>
    </>
  )
}

export default VideoList