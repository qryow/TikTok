import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '../../store/account/AccountAction'
import style from '././styles/VideoItem.module.css'
import VideoItem from '../../components/Video/VideoItem'

const VideoList = () => {
  const { currentAccount, loading } = useSelector(state => state.account)

  const dispatch = useDispatch()

  //const [visibleIndex, setVisibleIndex] = useState(0);
  //* после получения всех видео сделать анимацию скролла с помощью индексов 

  useEffect(() => {
    dispatch(getProfile());
  }, []);

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