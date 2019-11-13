import React from 'react'
import ReactTimeAgo from 'react-time-ago'



export default function LastSeen({video}) {
  return (
    
    <div className='date-index'>
      <ReactTimeAgo date={new Date(video.created_at)} />
    </div>
  )
}