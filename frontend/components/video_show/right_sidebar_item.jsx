import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebarItem = ({ video }) => {

    // handleClick{
    //     return(e) => {

    //     }
    // }

    return (
        <div className="rightsidebar-item">

            <div >
                <video width="170" height="90" controls>
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                    {/* <div className="title">{video.title}</div>
                    <div className="description">{video.description}</div>
                    <div className="creator">{this.props.creator.first_name} {this.props.creator.last_name}</div> */}
                </video>

            </div>

            <div >
                <iframe width="170" height="90" 
                src="https://www.youtube.com/embed/a1Y73sPHKxw" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe> 
                    {/* <div className="title">{video.title}</div>
                    <div className="description">{video.description}</div>
                    <div className="creator">{this.props.creator.first_name} {this.props.creator.last_name}</div> */}
            </div>
        </div>
    )

}

export default RightSidebarItem;