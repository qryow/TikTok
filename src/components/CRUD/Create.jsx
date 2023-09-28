import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { CreatePost, getPosts } from '../../store/posts/postsActions'


import style from '../CRUD/style/Crud__videoStyles.module.css';
import logo from '../../img/LogoLight.svg';
import profile from '../../img/Profile.svg';
import home from '../../img/HomeIcon.svg'

import { useDarkMode } from '../DarkMode/DarkMode';

import lightLogo from '../../image/lightLogo.svg';
import lightHome from '../../image/lightHome.svg';

const Create = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    categories: '',
    file_video: null
  })
  console.log(post.file_video);
  const { posts } = useSelector(state => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const clearPost = () => {
    setPost({
      title: '',
      description: '',
      categories: '',
      file_video: null
    });
  };

  const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
          <div className={isDarkMode ? `${style.navbar} ${style.navbar_lighter}` : `${style.navbar}`}>
            <div className={style.container}>
              <div className={style.nav__wrapper}>
                <div className={style.logo__wrapper}>
                  <img className={style.logo} src={isDarkMode ? lightLogo : logo} alt="TikTok logo" />
                </div>

                <div className={style.menu}>
                  <div className={style.home__wrapper} >
                    <NavLink to="/">
                    <img className={style.profile__logo} src={isDarkMode ? lightHome : home} alt="home" />
                    </NavLink>
                  </div>
                  <div className={style.profile__wrapper} >
                    <NavLink to="/profile">
                    <img className={style.profile__logo} src={profile} alt="profile" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div> 

            <div className={isDarkMode ? `${style.create_content} ${style.create_content_lighter}` : `${style.create_content}`}>
                
                <div className={style.input__wrapper}>
                  { post.file_video ? (
                    <video className={style.video} src={URL.createObjectURL(post.file_video)} />
                  ) : (
                    <>
                      <p className={isDarkMode ? `${style.input__text} ${style.input__text_lighter}` : `${style.input__text}`}>Add some video</p>
                      <input type="file" accept="video/*" className={style.video__input} onChange={(e) => setPost({ ...post, file_video: e.target.files[0]  })} />
                    </>
                  )}
                </div>

                <div className={style.video__platform}>
                    <h2 className={isDarkMode ? `${style.create_vid} ${style.create_vid_lighter}` : `${style.create_vid}`}>Create video</h2>
                    <div className={style.video_inputs}>
                        <input type="text" placeholder='Title' className={style['create-inputs']} onChange={(e) => setPost({ ...post, title: e.target.value })} value={post.title}/>
                        <input type="text" placeholder='Description' className={style['create-inputs']} onChange={(e) => setPost({ ...post, description: e.target.value })} value={post.description} />
                        <input type="text" placeholder='Categories' className={style['create-inputs']} onChange={(e) => setPost({ ...post, categories: e.target.value })} value={post.categories} />
                    </div>
                    <div className={style.create_btn}>
                        <button className={style.create_btns__clear} onClick={clearPost}>Clear</button>
                        <button className={style.create_btns__post} onClick={() => dispatch(CreatePost({ post, navigate }))}>Post</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
