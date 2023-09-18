import React, { useState, useRef, useEffect } from 'react';
import style from './styles/Video.module.css';
import videoFile from '../../videos/video.mp4';
import play from '../../img/play.svg';

const Video = () => {
  const videoRef = useRef();
  const clickRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement.addEventListener('ended', () => {
      videoElement.currentTime = 0;
      setIsPlaying(true);
    });

    videoElement.addEventListener('canplaythrough', () => {
      if (isPlaying) {
        videoElement.play();
      }
    });

    videoElement.addEventListener('timeupdate', () => {
      const duration = videoElement.duration;
      const currentTime = videoElement.currentTime;
      setVideoProgress((currentTime / duration) * 100);
    });

    return () => {
      videoElement.removeEventListener('ended', () => {});
      videoElement.removeEventListener('canplaythrough', () => {});
      videoElement.removeEventListener('timeupdate', () => {});
    };
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const progress = (offset / width) * 100;
    const duration = videoRef.current.duration;
    videoRef.current.currentTime = (progress / 100) * duration;
  };

  return (
    <div className={style.video__item}>
      {isPlaying ? (
        <div className={style.video__wrapper}>
          <video className={style.video} ref={videoRef} onClick={PlayPause}>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <div className={style.navigation}>
              <div className={style.navigation_wrapper} onClick={checkWidth} ref={clickRef}>
                <div className={style.seek_bar} style={{ width: `${videoProgress}%` }}></div>
              </div>
            </div>
        </div>
      ) : (
        <>
          <div className={style.video__wrapper}>
            <video className={style.video} ref={videoRef}>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img className={style.play} src={play} alt="play" onClick={PlayPause} />
          </div>
        </>
      )}
    </div>
  );
};

export default Video;

