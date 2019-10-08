import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
// import VideoIndexContainer from './video_index_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // debugger
        this.props.fetchVideos();
    }

    render() {
        // debugger
        const videos = this.props.videos.map(video => {
            return (
                <VideoIndexItem
                    key={video.id}
                    video={video}
                />
            )
        })
        return (
            <div>
                <ul>
                    {videos}
                </ul>
            </div>
        )
    }

}


export default VideoIndex
