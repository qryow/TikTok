import React, { useState, useEffect } from 'react'
import style from './ProfileStyle/ProfileStyle.module.css'

import logo from '../../img/Profile.svg'
import { useSelector, useDispatch } from 'react-redux'
import { editProfile, getProfile } from '../../store/account/AccountAction'

const EditProfile = ({ active, setActive }) => {
  const { currentAccount } = useSelector(state => state.account);
  const [profile, setProfile] = useState(currentAccount || {});
  console.log(profile);
  console.log(currentAccount);
  const dispatch = useDispatch()

  const [userObj, setUserObj] = useState({
    name: '',
    avatar: '',
    description: ''
  });


  useEffect(() => {
    dispatch(getProfile());
  }, []);
  
  return (
    <>
      <div className={ active ? `${style.modal} ${style.active}` : `${style.modal}` } onClick={() => setActive(false)}>
        <div className={ active ? `${style.modal__content} ${style.active}` : `${style.modal__content}` } onClick={e => e.stopPropagation()}>

          <h3 className={style.edit__title}>Edit profile</h3>
          
          {currentAccount ? (
            <div className={style.edit__fields}>
              <div className={style.edit__logo}>
                <h4 className={style.edit__field_title}>Profile logo</h4>
                <input type="file" accept="image/*" onChange={(e) => setProfile({ ...profile, avatar: e.target.files[0] })}/>
                <div className={style.img__wrapper}>
                  <img className={style.img} src={ currentAccount.avatar } alt="logo" />
                </div>
              </div>

              <div className={style.edit__name}>
                <h4 className={style.edit__field_title}>Profile name</h4>
                <div className={style.name__wrapper}>
                  <input maxLength={30} placeholder='Enter your new username' className={style.name__input} type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value, })} />
                  <p className={style.name__subtitle}>Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
                </div>
              </div>

              <div className={style.edit__desc}>
                <h4 className={style.edit__field_title}>Description</h4>
                {/*<input placeholder='Enter some bio' className={style.desc__input} type="" />*/}
                <textarea maxLength={260} className={style.desc__textarea} onChange={(e) => setProfile({ ...profile, description: e.target.value})}> </textarea>
              </div>

              <div className={style.edit__social}>
                <h4 className={style.edit__field_title}>Instagram</h4>
                <input className={style.social__input} type="text" />
              </div>
              <div className={style.edit__social}>
                <h4 className={style.edit__field_title}>YouTube</h4>
                <input className={style.social__input} type="text" />
              </div>

              <div className={style.btns}>
                <button className={style.edit__btn} onClick={() => {dispatch(editProfile({ profile })); setActive(false)}}>Edit</button>
              </div>

            </div>
          ) : (
            <div className={style.edit__fields}>
              <div className={style.edit__logo}>
                <h4 className={style.edit__field_title}>Profile logo</h4>
                <input type="file" accept="image/*" onChange={(e) => setProfile({ ...profile, avatar: e.target.files[0] })}/>
                <div className={style.img__wrapper}>
                  <img className={style.img} src='' alt="logo" />
                </div>
              </div>

              <div className={style.edit__name}>
                <h4 className={style.edit__field_title}>Profile name</h4>
                <div className={style.name__wrapper}>
                  <input maxLength={30} placeholder='Enter your new username' className={style.name__input} type="text" onChange={(e) => setProfile({ ...profile, name: e.target.value, })} />
                  <p className={style.name__subtitle}>Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
                </div>
              </div>

              <div className={style.edit__desc}>
                <h4 className={style.edit__field_title}>Description</h4>
                {/*<input placeholder='Enter some bio' className={style.desc__input} type="" />*/}
                <textarea maxLength={260} className={style.desc__textarea} onChange={(e) => setProfile({ ...profile, description: e.target.value})}> </textarea>
              </div>

              <div className={style.edit__social}>
                <h4 className={style.edit__field_title}>Instagram</h4>
                <input className={style.social__input} type="text" />
              </div>
              <div className={style.edit__social}>
                <h4 className={style.edit__field_title}>YouTube</h4>
                <input className={style.social__input} type="text" />
              </div>

              <div className={style.btns}>
                <button className={style.edit__btn} onClick={() => {dispatch(editProfile({ profile })); setActive(false)}}>Edit</button>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default EditProfile