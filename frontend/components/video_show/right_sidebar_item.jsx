import React from 'react';
import { Link } from 'react-router-dom';


const RightSidebarItem = ({ video, user }) => {

    // handleClick{
    //     return(e) => {

    //     }
    // }


    return (
        <div className="rightsidebar-item">
           {/* <h1 className='header'>Up next</h1> */}
            <Link to={`/videos/${video.id}`}
                className='thumbnail-container' > 
                <video width="170" height="90" className='thumbnail' >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag. 
                </video>

            <section className="thumb-info">
                <h1 className='thumb-title'>{video.title}</h1>
                    <br/>
                {/* <h2>{user}</h2> */}
            </section>
            </Link>

        </div>
    )

}

export default RightSidebarItem;