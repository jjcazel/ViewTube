import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

const RightSidebarItem = (props) => {
    const video = props.video;
    const user = props.user

    const handleClick = () => { 
        props.history.push(`/videos/${video.id}`) }

    let username;
    if (user){
        username = <h2>{user.first_name} {user.last_name}</h2> 
    }
    
    return (
      <div onClick={handleClick}className="rightsidebar-item">
        
        <video width="170" height="90" className='thumbnail'  >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag. 
        </video>

        <section className="thumb-info">
            <h1 className='thumb-title'>{video.title}</h1>
                <br/>
            <div className='username'>{username}</div> 
        </section>

      </div>
  )

}

export default withRouter(RightSidebarItem);