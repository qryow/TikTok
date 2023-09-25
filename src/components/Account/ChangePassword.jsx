import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/account/AccountSlice';
import { changePassword } from '../../store/account/AccountAction';
import style from './AccountStyles/AccountStyles.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../../img/LogoLight.svg'

const ChangePassword = () => {
  const [userObj, setUserObj] = useState({
    old_password: '',
    new_password: '',
    new_password_confirm: ''
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

            <h3 className={style.nav__name}>ChangePassword</h3>

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
          <input className={style.input} type="password" minLength="6" placeholder="Old Password" onChange={(e) => setUserObj({ ...userObj, old_password: e.target.value})} />
          <input className={style.input} type="password" minLength="6" placeholder=" New Password" onChange={(e) => setUserObj({ ...userObj, new_password: e.target.value})} />
          <input className={style.input} type="password" minLength="6" placeholder=" New Password confirm" onChange={(e) => setUserObj({ ...userObj, new_password_confirm: e.target.value})} />

          <button className={style.btn} onClick={() => dispatch(changePassword({ userObj, navigate }))}>ChangePassword</button>
        </div>

      </div>
    </>
  )
}

export default ChangePassword