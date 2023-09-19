import React, { useState } from 'react'
import style from './styles/Video.module.css'

import like from '../../img/Like.svg'
import likeRed from '../../img/LikeRed.svg'
import comment from '../../img/Comment.svg'
import favorite from '../../img/Favourite.svg'
import favoriteYellow from '../../img/FavoriteYellow.svg'
import repost from '../../img/Repost.svg'
import share from '../../img/Share.svg'

const VideoButtons = () => {
  const [liked, setLiked] = useState(true);
  const [favorited, setFavorite] = useState(true);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handleFavoriteClick = () => {
    setFavorite(!favorited);
  };

  return (
    <div className={style.btns__wrapper}>
      <div className={style.btn__wrapper}>
      <img className={style.like} onClick={handleLikeClick} src={liked ? like : likeRed} alt="like" />
        {/*<img className={style.like} src={like} alt="comment" />*/}
      </div>
      <div className={style.btn__wrapper}>
        <img className={style.comment} src={comment} alt="comment" />
      </div>
      <div className={style.btn__wrapper}>
        <img className={style.favorite} onClick={handleFavoriteClick} src={favorited ? favorite : favoriteYellow} alt="repost" />
      </div>
      <div className={style.btn__wrapper}>
        <img className={style.repost} src={repost} alt="repost" />
      </div>
      <div className={style.btn__wrapper}>
        <img className={style.share} src={share} alt="share" />
      </div>
    </div>
  )
}

export default VideoButtons