import React, { useState } from 'react'
import style from '../styles/Video.module.css'
import Modal from '../VideoDetails'

import like from '../../../img/Like.svg'
import likeRed from '../../../img/LikeRed.svg'
import comment from '../../../img/Comment.svg'
import favorite from '../../../img/Favourite.svg'
import favoriteYellow from '../../../img/FavoriteYellow.svg'
import repost from '../../../img/Repost.svg'
import share from '../../../img/Share.svg'

const VideoButtons = () => {
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorite] = useState(false);
  const [modalActive, setModalActive] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);

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
        <img className={style.like} onClick={handleLikeClick} src={liked ? likeRed : like} alt="like" />
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.comment} src={comment} alt="comment" onClick={() => {setModalActive(true); setIsPlaying(true)}} />
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.favorite} onClick={handleFavoriteClick} src={favorited ? favoriteYellow : favorite} alt="repost" />
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.repost} src={repost} alt="repost" />
        </div>
        <div className={style.btn__wrapper}>
          <img className={style.share} src={share} alt="share" />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </>
  )
}

export default VideoButtons