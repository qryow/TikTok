import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreatePost } from '../../store/posts/postsActions'


import styles from '../CRUD/style/Crud__videoStyles.module.css';
import logo from '../../img/LogoLight.svg';
import profile from '../../img/Profile.svg';
import add from '../../img/Add__light.svg';

const Create = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    categories: ''
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();


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
                        <input type="text" placeholder='Title' className={styles['create-inputs']} onChange={(e) => setPost({ ...post, title: e.target.value })} />
                        <input type="text" placeholder='Description' className={styles['create-inputs']} onChange={(e) => setPost({ ...post, description: e.target.value })} />
                        <input type="text" placeholder='Categories' className={styles['create-inputs']} onChange={(e) => setPost({ ...post, categories: e.target.value })} />
                    </div>
                    <div className={styles.create_btn}>
                        <button className={styles.create_btns__clear}>Clear</button>
                        <button className={styles.create_btns__post} onClick={() => dispatch(CreatePost({ post, navigate }))}>Post</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
