import React from 'react';
import { Link } from 'react-router-dom';


const RightSidebarItem = ({ video }) => {

    // handleClick{
    //     return(e) => {

    //     }
    // }


    return (
        <div className="rightsidebar-item">
           
            
            <video width="170" height="90" class='thumbnail' >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag. 
            </video>
            <section className="thumb-info">
                <h1 className='thumb-title'>Title</h1>
                    <br/>
                <h2>creator</h2>

            </section>


            <div >
                {/* <div className="title">{video.title}</div>
                <div className="description">{video.description}</div>
                <div className="creator">{this.props.creator.first_name} {this.props.creator.last_name}</div> */}
            </div>
        </div>
    )

}

export default RightSidebarItem;