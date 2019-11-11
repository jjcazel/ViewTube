import React from 'react';
import { withRouter } from 'react-router';
import LastSeen from './react_time_ago'

const VideoIndexItem = (props) => {
    const video = props.video;
    const user = props.user;

    const handleClick = () => {
        props.history.push(`/videos/${video.id}`)
    }

    let username;
    if (user) {
        username = <h2>{user.first_name} {user.last_name}</h2>
    }
    
    return (
        <div onClick={handleClick} className="index-item">
        
            <video width="210" height="118" className='thumbnail-2' >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <section className="thumb-info">
                <h1 className='thumb-title'>{video.title}
                </h1>
                <div className='username'>{username}</div>
                <div className='date-index-views-cont'>
                  <div className='date-index'>{<LastSeen video={video} />}</div> 
                  <div className='views'># views</div> 
                </div> 
            </section>

        </div>
    )

}

export default withRouter(VideoIndexItem);