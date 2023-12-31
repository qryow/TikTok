import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/account/AccountSlice';
import { loginUser } from '../../store/account/AccountAction';
import style from './AccountStyles/AccountStyles.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../../img/LogoLight.svg'

const AccountLogin = () => {
  const [userObj, setUserObj] = useState({
    email: '',
    password: ''
  });
  const { status } = useSelector(state => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearStatus());
  }, []);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.nav__wrapper}>

            <div className={style.logo__wrapper}>
              <img className={style.logo} src={logo} alt="" />
            </div>

            <h3 className={style.nav__name}>Login</h3>

          </div>
        </div>
      </div>

      {status === 'error' ? (
        <>
          <div className={style.error}>
            <h3 className={style.error__text}>Some error occured!   </h3>
            <br />
            <button className={style.error__btn} onClick={() => dispatch(clearStatus())}>Try again</button>
          </div>
        </>
      ) : (

      <div className={style.inputs}>
        <div className={style.navigation}>
          <NavLink className={style.nav__title} to="/">
            Sign Up
          </NavLink>
          <NavLink className={style.nav__title} to="/login">
            Sign In
          </NavLink>
        </div>

        <div className={style.inputs__wrapper}>
          <input className={style.input} type="email" src='' placeholder="Email@gmail.com" onChange={(e) => setUserObj({ ...userObj, email: e.target.value})} />
          <input className={style.input} type="password" minLength="6" placeholder="Password" onChange={(e) => setUserObj({ ...userObj, password: e.target.value})} />
          <a className={style.forgot} href="" onClick={() => navigate('/forgot-password')} > Забыли пароль ?</a>

          <button className={style.btn} onClick={() => dispatch(loginUser({ userObj, navigate }))}>Login</button>
        </div>

      </div>
      )}

      
    </>
  )
}

export default AccountLogin