import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const videos = this.props.videos.map(video => {
            return (
                <div>
                    <VideoIndexItem
                        key={video.id}
                        video={video}
                    />

                </div>
                // <span></span>
            )
        })
    }

}


export default VideoIndex
