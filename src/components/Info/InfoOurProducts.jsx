import React, { useRef, useState } from 'react';
import style from './InfoStyles/Info.module.css';
import video1 from './Videos/video_product1.mp4';
import video2 from './Videos/video_product2.mp4';
import video3 from './Videos/video_product3.mp4';
import video4 from './Videos/video_product4.mp4';
import video5 from './Videos/video_product5.mp4';
import video6 from './Videos/video_product6.mp4';
import video7 from './Videos/video_product7.mp4';
import video8 from './Videos/video_product8.mp4';

const InfoOurProducts = () => {
    const [videoRefs, setVideoRefs] = useState([
        useRef(null)
    ]);

    const handlePlayVideo = (index) => {
        videoRefs.forEach((ref, i) => {
            if (ref.current) {
                ref.current.currentTime = 0;
            }
        });


        if (videoRefs[index].current) {
            videoRefs[index].current.play();
        }
    };

    return (
        <div className={style.InfoOurProducts}>
            <h1>Our products</h1>
            <p>Build awesome experiences and powerful tools that inspire creativity and allow users to create, connect, and share the world</p>
            <div className={style.our_products}>
                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Login Kit</h2>
                    <p>Enable Login Kit so that users can sign into your app or website quickly and securely through their TikTok login credentials. By logging in with TikTok, users can share their videos on your app, bringing creativity from TikTok to your app experience.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>

                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Share Kit</h2>
                    <p>Share content to TikTok with just a tap. Add a "Share to TikTok" button to your app so users can share their creative photos and videos with the entire TikTok community.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>

                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Content Posting API</h2>
                    <p>Our API empowers your creators to seamlessly post their content to TikTok.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>

                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video4} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Embed videos</h2>
                    <p>Make it easy to share your favorite TikTok videos on the web with embeds. Embedded videos will credit the original creator by showcasing their username and link back to their original video on our website.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>

                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video5} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Green Screen Kit</h2>
                    <p>Inspire creativity with Green Screen backgrounds. Users can record themselves over photos and videos shared directly from your app.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>

                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video6} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Display API</h2>
                    <p>The Display API contains a set of HTTP-based APIs that your product can use to display TikTok creator's videos and their profile information.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>

                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video7} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Research API</h2>
                    <p>The Research API will give researchers access to TikTok public data on user profiles, videos, and comments.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>

                <div className={style.product_item}>
                    <video autoPlay loop className={style.video} ref={videoRefs}>
                        <source src={video8} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Commercial Content API</h2>
                    <p>The Commercial Content APIs will allow the public and researchers to perform customized, advertiser name or keyword based searches on ads and other commercial content data that is stored in the Commercial Content Library.</p>
                    <button onClick={() => handlePlayVideo()}>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default InfoOurProducts;
