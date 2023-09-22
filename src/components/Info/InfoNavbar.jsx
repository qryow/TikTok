// InfoNavbar.js

import React, { useState } from 'react';
import tiktok from '../../img/tiktokdevelop.svg';
import style from './InfoStyles/Info.module.css';

const InfoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.InfoNavbar}>
      <img src={tiktok} alt="TikTok" />

      <div className={`${style.navbar_links} ${isOpen ? style.open : ''}`}>
        <a href="">Products</a>
        <a href="">Docs</a>
        <a href="">Support</a>
        <a href="">Log in</a>
      </div>

      <div className={style.burger} onClick={toggleMenu}>
        <div className={`${style.line} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.line} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.line} ${isOpen ? style.open : ''}`}></div>
      </div>
    </div>
  );
};

export default InfoNavbar;
