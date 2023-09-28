import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/account/AccountSlice';
import { forgotPassword } from '../../store/account/AccountAction';
import style from './AccountStyles/AccountStyles.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../../img/LogoLight.svg'

const ForgotPassword = () => {
  const [userObj, setUserObj] = useState({
    email: ''
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

            <h3 className={style.nav__name}>Forgot Password</h3>

          </div>
        </div>
      </div>

      {status === 'error' ? (
        <>
          <div className={style.error}>
            <h3 className={style.error__text}>Some error occured!</h3>
            <br />
            <button className={style.error__btn} onClick={() => dispatch(clearStatus())}>Try again</button>
          </div>
        </>
      ) : (

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
          <input className={style.input} type="email" placeholder="Email" onChange={(e) => setUserObj({ ...userObj, email: e.target.value})} />

          <button className={style.btn} onClick={() => dispatch(forgotPassword({ userObj, navigate }))}>Forgot Password</button>
        </div>

      </div>
      )}

      
    </>
  )
}

export default ForgotPassword