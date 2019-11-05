import React from 'react'
import ReactTimeAgo from 'react-time-ago'



export default function LastSeen({video}) {
  debugger
  console.log(video)
  return (
    <div>
      <ReactTimeAgo date={new Date(video.created_at)} />
    </div>
  )
}