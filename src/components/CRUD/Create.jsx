import React from 'react';
import styles from '../CRUD/style/Crud__videoStyles.module.css';
import logo from '../../img/LogoLight.svg';
import profile from '../../img/Profile.svg';
import add from '../../img/Add__light.svg';

const Create = () => {
    return (
        <>
            <div className={styles.navbar}>
                <img className={styles.logo} src={logo} alt="" />
                <img className={styles.profile__logo} src={profile} alt="profile" />
            </div>
            <hr className={styles.hr} />
            <div className={styles.create_content}>
                <div className={styles.video_content}>
                    <img className={styles.add_icon} src={add} alt='+' />
                </div>
                <div className={styles.video__platform}>
                    <h2 className={styles.create_vid}>Create video</h2>
                    <div className={styles.video_inputs}>
                        <input type="text" placeholder='Title' className={styles['create-inputs']} />
                        <input type="text" placeholder='Hashtags' className={styles['create-inputs']} />
                    </div>
                    <div className={styles.create_btn}>
                        <button className={styles.create_btns__clear}>Clear</button>
                        <button className={styles.create_btns__post}>Post</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
