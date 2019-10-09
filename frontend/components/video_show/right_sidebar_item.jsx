import React from 'react';
import { Link } from 'react-router-dom';


const RightSidebarItem = (props) => {
    const video = props.video;
    const user = props.user

    const handleClick = () => { 
        debugger
        this.props.history.push(`/videos/${video.id}`) }

    return (
        <div onClick={handleClick}className="rightsidebar-item">
           {/* <h1 className='header'>Up next</h1> */}
            {/* <Link to={`/videos/${video.id}`} */}
                {/* className='thumbnail-container' >  */}
                <video width="170" height="90" className='thumbnail' >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag. 
                </video>

            <section className="thumb-info">
                <h1 className='thumb-title'>{video.title}</h1>
                    <br/>
                {/* <h2>{user[first_name]} {user[last_name]}</h2> */}
            </section>
            {/* </Link> */}

        </div>
    )

}

export default RightSidebarItem;