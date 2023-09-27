import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '../../store/account/AccountAction'
import style from '././styles/VideoItem.module.css'
import VideoItem from '../../components/Video/VideoItem'
import { getPosts } from '../../store/posts/postsActions'
import { useDarkMode } from '../DarkMode/DarkMode'

const VideoList = () => {
  const { currentAccount, loading } = useSelector(state => state.account)
  const { posts } = useSelector(state => state.posts)
  console.log(posts);
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const dispatch = useDispatch()

  //const [visibleIndex, setVisibleIndex] = useState(0);
  //* после получения всех видео сделать анимацию скролла с помощью индексов 

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <div className={isDarkMode ? `${style.video__list} ${style.video__list_dark}` : `${style.video__list}`}>
        {Array.isArray(posts.results) ? (
          posts.results.map(post => (
            <VideoItem key={post.id} post={post} />
          ))
        ) : (
          <p>No posts to display</p>
        )}
      </div>
    </>
  )
}

export default VideoList