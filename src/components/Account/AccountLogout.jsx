import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './AccountStyles/AccountStyles.module.css';
import { clearStatus } from '../../store/account/AccountSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../img/LogoLight.svg'

const AccountLogout = () => {
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
    <div>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.nav__wrapper}>

            <div className={style.logo__wrapper}>
              <img className={style.logo} src={logo} alt="" />
            </div>

            <h3 className={style.nav__name}>Logout</h3>

          </div>
        </div>
      </div>

      <div className={style.inputs}>
        {/*<div className={style.navigation}>
          <NavLink className={style.nav__title} to="/register">
            Sign Up
          </NavLink>
          <NavLink className={style.nav__title} to="/login">
            Sign In
          </NavLink>
        </div>*/}

        <div className={style.inputs__wrapper}>
          {/*<input className={style.input} type="email" src='' placeholder="Email@gmail.com"  onChange={(e) => setUserObj({ ...userObj, email: e.target.value})}  />*/}
          <input className={style.input} type="email" src='' placeholder="Email@gmail.com" />
          

          {/*<button className={style.btn} onClick={() => dispatch(accountActivate({ userObj, navigate }))}>Activate</button>*/}
          <button className={style.btn}>Logout</button>
        </div>

      </div>
    </div>
    );
};

export default AccountLogout;