import React from 'react'
import hashtagslogo from '../../img/hashtags.png'
import './style/SearchStyle.css'

const Hashtags = () => {
  return (
    <>
    <div className='search__hashtags_platform'>
      <div className='hashtags'>
        <div className='hashtags__left-content'>
          <img src={hashtagslogo} alt="" />
          <h2>footbal</h2>
        </div>
        <h3>4,5B Frolowers</h3>
      </div>
    </div>
    </>
  )
}

export default Hashtags