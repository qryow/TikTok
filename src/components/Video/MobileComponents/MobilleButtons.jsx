import React, { useState } from 'react'
import style from '../styles/Video.module.css'

import share from '../../../img/LikeWhite.svg'
import likeRed from '../../../img/LikeRed.svg'
import comment from '../../../img/CommentWhite.svg'
import favorite from '../../../img/FavouriteWhite.svg'
import favoriteYellow from '../../../img/FavoriteYellow.svg'
import repost from '../../../img/RepostWhite.svg'
import like from '../../../img/ShareWhite.svg'
import logo from '../../../img/Profile.svg'
import subscribe from '../../../img/Subscribe.svg'

const VideoButtons = () => {
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorite] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handleFavoriteClick = () => {
    setFavorite(!favorited);
  };

  const handleSubscribeClick = () => {
    setSubscribed(!subscribed);
  };

  return (
    <div className={style.mobile_btns__wrapper}>
      <div className={style.mobile_info__logo}>
          <img className={style.mobile_logo} src={logo} alt="" />
          <img className={style.mobile_subscribe} onClick={handleSubscribeClick} src={subscribed ? '' : subscribe} alt="click again" />
      </div>
      <div className={style.btn__wrapper}>
        <img className={style.like} onClick={handleLikeClick} src={liked ? likeRed : like} alt="like" />
        {/*<img className={style.like} src={like} alt="comment" />*/}
      </div>
      <div className={style.btn__wrapper}>
        <img className={style.comment} src={comment} alt="comment" />
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
  )
}

export default VideoButtons