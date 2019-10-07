import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video }) => {
    
    // handleClick{
    //     return(e) => {

    //     }
    // }

    return (
        <div onClick=''>
            <video width="320" height="240" controls>
                <source src={video.photoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    )

}

export default VideoIndexItem;