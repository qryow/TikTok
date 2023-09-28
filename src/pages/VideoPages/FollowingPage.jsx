import React from 'react'
import style from '../../components/Video/styles/Video.module.css'
import Navbar from '../../components/UI/Navbar'
import VideoList from '../../components/Video/VideoList'
import SubscriptionsList from '../../components/UI/subscriptions/SubscriptionsList'

const FollowingPage = () => {
  return (
    <>
      <div className={style.page}>
      <Navbar />
      <SubscriptionsList />
      <VideoList />
    </div>
    </>
  )
}

export default FollowingPage