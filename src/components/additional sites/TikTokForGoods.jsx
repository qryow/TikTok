import React from 'react';
import tiktoklogo from '../../img/LogoLight.svg';
import forgoodlogo from '../../img/forgood.jpg';
import style from './adaptionalStyles/Forgood.module.css';
import facebooklogo from '../../img/facebooklogo.svg';
import twiterlogo from '../../img/twiterlogo.svg';
import logotiktok from '../../img/TIKTOKiKON.svg';
import girl from '../../img/beatifulgirl.jpg';
import gruppagirl from '../../img/gruppa girl.jpg';
import dovolnuynegr from '../../img/dovolnuy_negr.jpg';
import stoodin from '../../img/101.jpg';
import familyphoto from '../../img/family_photo.jpg';
import negrandwhite from '../../img/whiteandnegr.jpg';
import partners from '../../img/parhtners.png';

const TikTokForGoods = () => {
  return (
    <>
      <div className={style.forgood__navbar}>
        <img src={tiktoklogo} alt="" />
        <div className={style.navbar_left_content}>
          <li>Home</li>
          <li>Success Stories</li>
          <li>How To</li>
          <li>About Us</li>
          <input type="search" placeholder="Search" />
        </div>
        <input type="text" className={style.search} placeholder='Search'/>
      </div>
      <div className={style.forgood}>
        <img src={forgoodlogo} alt="" className={style.forgoodlogo} />
        <div className={style.forgood_top_content}>
          <div className={style.social_logo}>
            <img src={facebooklogo} alt="" />
            <img src={twiterlogo} alt="" />
            <img src={logotiktok} alt="" />
          </div>
          <div className={style.top_content_txt}>
            <h2>Create real change on TikTok</h2>
            <p><small>See the good our creators are doing all around the world. And be the good by using TikTok <br /> to make a positive impact in your community.</small></p>
          </div>
        </div>
        <div className={style.Success_stories}>
          <h2>Success stories</h2>
          <div className={style.Success_stories_img}>
            <button><img src={girl} alt="" /></button>
            <button><img src={gruppagirl} alt="" /></button>
            <button><img src={dovolnuynegr} alt="" /></button>
          </div>
          <li><small>See all</small></li>
        </div>
        <div className={style.How}>
          <h2>How To</h2>
          <div className={style.How_img}>
            <button><img src={stoodin} alt="" /></button>
            <button><img src={familyphoto} alt="" /></button>
            <button><img src={negrandwhite} alt="" /></button>
          </div>
          <li><small>See all</small></li>
        </div>
        <div className={style.partners}>
          <h2><strong>Our Partners</strong></h2>
          <button><img src={partners} alt="" /></button>
        </div>
      </div>
    </>
  );
}

export default TikTokForGoods;