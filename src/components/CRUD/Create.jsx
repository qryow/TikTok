import React from 'react';
import '../CRUD/style/Crud__videoStyles.css'
import logo from '../../img/LogoLight.svg';
import profile from '../../img/Profile.svg';
import add from '../../img/Add__light.svg';

const Create = () => {
    return (
        <>
            <div className="navbar">
                        <img className="logo" src={logo} alt="" />
                        <img className="profile__logo" src={profile} alt="profile" />
            </div>
            <hr />
            <div className="create_content">
                <div className="video_content">
                    <img className="add_icon" src={add} alt='+' />
                </div>
                <div className='video__platform'>
                    <h2 className="create_vid">Create video</h2>
                    <div className="video_inputs">
                    <input type="text" placeholder='Title' className="create-inputs"/>
                    <input type="text" placeholder='Hashtags' className="create-inputs"/>
                    </div>
                    <div className="create_btn">
                        <button className="create_btns__clear">Clear</button>
                        <button className="create_btns__post">Post</button>
                    </div>
                </div>
            </div>
            </>
    );
};

export default Create;