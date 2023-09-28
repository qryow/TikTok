import React, { useState } from 'react'
import style from '../styles/Video.module.css'
import Modal from '../VideoDetails'
import { likePost } from '../../../store/posts/postsActions'
import { useDispatch } from 'react-redux'

import { useDarkMode } from '../../DarkMode/DarkMode'
import like from '../../../img/Like.svg'
import likeRed from '../../../img/LikeRed.svg'
import comment from '../../../img/Comment.svg'
import favorite from '../../../img/Favourite.svg'
import favoriteYellow from '../../../img/FavoriteYellow.svg'
import repost from '../../../img/Repost.svg'
import share from '../../../img/Share.svg'

import lighterLike from '../../../image/lighterLike.svg';
import lighterComment from '../../../image/lighterMasseg.svg';
import lighterFavorite from '../../../image/lighterFavorite.svg';
import lighterShare from '../../../image/lighterShare.svg';

const VideoButtons = ({ post }) => {
  console.log(post);
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorite] = useState(false);
  const [modalActive, setModalActive] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const dispatch = useDispatch()

  const dispatch = useDispatch()

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handleFavoriteClick = () => {
    setFavorite(!favorited);
  };

  return (
    <>
      <div className={style.btns__wrapper}>
        <div className={style.btn__wrapper}>

          <img className={style.like} onClick={() => {handleLikeClick(); dispatch(likePost(post.id)) }} src={post.likes.some(like => like.like) ? likeRed : (isDarkMode ? lighterLike : like)} alt="like" />
          <p className={isDarkMode ? `${style.like__text} ${style.like__text_lighter}` : `${style.like__text}`}> {post.likes.filter(like => like.like).length} </p>
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.comment} src={isDarkMode ? lighterComment : comment} alt="comment" onClick={() => {setModalActive(true); setIsPlaying(true)}} />
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.favorite} onClick={handleFavoriteClick} src={favorited ? favoriteYellow : favorite} alt="repost" />
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.repost} src={isDarkMode ? lighterShare : repost} alt="repost" />
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.share} src={share} alt="share" />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} post={post} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </>
  )
}

export default VideoButtons