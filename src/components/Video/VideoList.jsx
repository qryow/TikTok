import React from 'react'
import { useSelector } from 'react-redux'

const VideoList = () => {
  const { posts, loading } = useSelector(state => state.posts)
  console.log(posts)
  return (
    <div>VideoList</div>
  )
}

export default VideoList