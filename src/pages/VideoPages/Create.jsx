import React from 'react';
import style from '../../components/Video/styles/Video.module.css';
import logo from '../../img/LogoLight.svg';
import profile from '../../img/Profile.svg';
import add from '../../img/Add__light.svg';

const Create = () => {
    return (
        <div className={style.createVideo}>
            <div className={style.navbar}>
                <div className={style.create_container}>
                    <div className={style.nav__wrapper}>

                        <div className={style.logo__wrapper}>
                        <img className={style.logo} src={logo} alt="" />
                        </div>

                        <div className={style.profile__wrapper}>
                        <img className={style.profile__logo} src={profile} alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.create_content}>
                <div className={style.video_content}>
                    <img className={style.add_icon} src={add} alt='+' />
                </div>
                <div className={style.video_inputs}>
                    <h2>Create video</h2>
                    <input type="text" placeholder='Title' />
                    <input type="text" placeholder='Hashtags' />

                    <div className={style.create_btns}>
                        <button className={style.create_btns__clear}>Clear</button>
                        <button className={style.create_btns__post}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;