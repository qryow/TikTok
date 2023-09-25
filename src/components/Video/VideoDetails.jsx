import React, { useState, useEffect, useRef } from 'react'
import style from './styles/VideoItem.module.css'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


import videoFile from '../../videos/video.mp4';
import play from '../../img/play.svg';
import logo from '../../img/Profile.svg'

const VideoDetails = ({active, setActive, isPlaying, setIsPlaying}) => {
  const videoRef = useRef();
  const clickRef = useRef();
  const [videoProgress, setVideoProgress] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement.addEventListener('ended', () => {
      videoElement.currentTime = 0;
      setIsPlaying(true);
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

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
      let emoji = String.fromCodePoint(...codeArray);
      setText(text + emoji)
  }


  return (
    <div className={ active ? `${style.modal} ${style.active}` : `${style.modal}` } onClick={() => {
              setActive(false);
              if (isPlaying) {
                setIsPlaying(false);
              }
            }}>
      <div className={ active ? `${style.modal__content} ${style.active}` : `${style.modal__content}` }  onClick={(e) => {e.stopPropagation();}}>

        <div className={style.content__wrapper}>
          {isPlaying ? (
            <div className={style.video__wrapper}>
              <video autoPlay loop className={style.video} ref={videoRef} onClick={PlayPause}>
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

          <div className={style.comments}>
            <div className={style.video__info}>

              <div className={style.info__logo}>
                <img className={style.logo} src={logo} alt="" />
              </div>

              <div className={style.info__text}>
                <h4 className={style.acc__name}>masteroogway</h4>
                <p className={style.video__subtitle}>Why is it so small?</p>

                <div className={style.hashtags}>
                  <a className={style.hashtag} href="/">#car </a>
                  <a className={style.hashtag} href="/">#jdm </a>
                  <a className={style.hashtag} href="/">#japan </a>
                  <a className={style.hashtag} href="/">#skyline </a>
                  <a className={style.hashtag} href="/">#gtr34 </a>
                  <a className={style.hashtag} href="/">#nissan </a>
                  <a className={style.hashtag} href="/">#edit </a>
                </div>
              </div>
                
            </div>

            <div className={style.comments__wrapper}>
              
              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

              <div className={style.one__comment}>
                <div className={style.comment__logo_wrapper}>
                  <img className={style.comment__logo} src={logo} alt="logo" />
                </div>
                <div className={style.comment__content}>
                  <h4 className={style.comment__title}>
                    qryow
                  </h4>
                  <p className={style.comment__text}> Why it is so small ?</p>
                </div>
              </div>

            </div>

            <div className={style.add__comment}>

              <img className={style.emoji__icon} src={logo} alt="" onClick={() => setShowEmoji(!showEmoji)} />
                
                {showEmoji && <div className={style.add__emoji}>
                  <Picker className={style.picker} data={data} emojiSize={28} emojiButtonSize={42} onEmojiSelect={addEmoji} />
                </div>}

              <div className={style.comment__input}>
                <input placeholder='Add comment' className={style.input} type="text" value={text} onChange={(e) => setText(e.target.value)} />
              </div>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default VideoDetails