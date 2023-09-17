import React from 'react'
import style from '../../styles/index.module.css';
import logo from '../../img/tiktokLogo.svg';
import { useNavigate } from 'react-router-dom';

const AccountLogin = () => {
  const navigate = useNavigate();

  return (
    <div className={style.form}>
    <div className={style.registerTop}>
      <img src={logo} alt="TikTok" />
      <h2>Register</h2>
    </div>
    <hr />
  <div className={style.info_form}>
    <div className={style.singBtns}>
      <button className={style.singUp}>Sing up</button>
      <button onClick={() => navigate('/login')}>Sing in</button>
    </div>

    <input type="email" src='' placeholder="Email" />

    <input type="password" minLength="6" placeholder="Password" />

    <input type="password" minLength="6"  placeholder="Password confirm" />

    <button className={style.registerBtn}>Register</button>
  </div>
</div>
  )
}

export default AccountLogin