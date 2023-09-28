import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './AccountStyles/AccountStyles.module.css';
import { clearStatus } from '../../store/account/AccountSlice';
import { accountActivate } from '../../store/account/AccountAction'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../img/LogoLight.svg'

const AccountActivate = () => {
  const [userObj, setUserObj] = useState({
    email: '',
    code: ''
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

            <h3 className={style.nav__name}>Activate Account</h3>

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
        {/*<div className={style.navigation}>
          <NavLink className={style.nav__title} to="/register">
            Sign Up
          </NavLink>
          <NavLink className={style.nav__title} to="/login">
            Sign In
          </NavLink>
        </div>*/}

        <div className={style.inputs__wrapper}>
          <input className={style.input} type="email" src='' placeholder="Email@gmail.com"  onChange={(e) => setUserObj({ ...userObj, email: e.target.value})}  />
          <input className={style.input} type="text" src='' placeholder="activate code"  onChange={(e) => setUserObj({ ...userObj, code: e.target.value})}  />
          

          <button className={style.btn} onClick={() => dispatch(accountActivate({ userObj, navigate }))}>Activate</button>
        </div>

      </div>
      )}

      
    </div>
    );
};

export default AccountActivate;
