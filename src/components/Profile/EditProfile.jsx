import React from 'react'
import style from './ProfileStyle/ProfileStyle.module.css'

import logo from '../../img/Profile.svg'

const EditProfile = ({ active, setActive }) => {
  return (
    <>
      <div className={ active ? `${style.modal} ${style.active}` : `${style.modal}` } onClick={() => setActive(false)}>
        <div className={ active ? `${style.modal__content} ${style.active}` : `${style.modal__content}` } onClick={e => e.stopPropagation()}>

          <h3 className={style.edit__title}>Edit profile</h3>

          <div className={style.edit__fields}>
            <div className={style.edit__logo}>
              <h4 className={style.edit__field_title}>Profile logo</h4>
              <input type="file" />
              <img src={logo} alt="" />
            </div>

            <div className={style.edit__name}>
              <h4 className={style.edit__field_title}>Profile name</h4>
              <div className={style.name__wrapper}>
                <input maxLength={30} placeholder='Enter your username' className={style.name__input} type="text" />
                <p className={style.name__subtitle}>Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
              </div>
            </div>

            <div className={style.edit__desc}>
              <h4 className={style.edit__field_title}>Description</h4>
              {/*<input placeholder='Enter some bio' className={style.desc__input} type="" />*/}
              <textarea maxLength={260} className={style.desc__textarea}></textarea>
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
              <button className={style.clear__btn}>Clear</button>
              <button className={style.edit__btn}>Edit</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default EditProfile