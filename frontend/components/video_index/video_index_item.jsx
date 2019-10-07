import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = (props) => {
    const video = props.video;
    
    return (
        <div>
            <Link to={`/videos/${video.id}`}> </Link>

            <div>
                <Link to={`/videos/${video.id}`}>{video.title}</Link>
            </div>


        </div>
    )

}

export default VideoIndexItem;