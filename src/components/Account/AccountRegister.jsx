import React from 'react';
import style from './AccountStyles/AccountStyles.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../../img/LogoLight.svg'

const AccountRegister = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.nav__wrapper}>

            <div className={style.logo__wrapper}>
              <img className={style.logo} src={logo} alt="" />
            </div>

            <h3 className={style.nav__name}>Register</h3>

          </div>
        </div>
      </div>

      <div className={style.inputs}>
        <div className={style.navigation}>
          <NavLink className={style.nav__title} to="/register">
            Sign Up
          </NavLink>
          <NavLink className={style.nav__title} to="/login">
            Sign In
          </NavLink>
        </div>

        <div className={style.inputs__wrapper}>
          <input className={style.input} type="email" src='' placeholder="Email@gmail.com" />
          <input className={style.input} type="password" minLength="6" placeholder="Password" />
          <input className={style.input} type="password" minLength="6"  placeholder="Password confirm" />

          <button className={style.btn} onClick={() => navigate('/login')}>Register</button>
        </div>

      </div>
    </>
    );
};

export default AccountRegister;
