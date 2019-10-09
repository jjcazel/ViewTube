import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
import GreetingContainer from '../greeting/greeting_container';
import VideoIndexContainer from './video_index_container'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const user = this.props.users[video.creatorId];
        debugger
        const videos = this.props.videos.map(video => {
            debugger
            return (
                <VideoIndexItem
                    key={video.id}
                    video={video}
                    user={user}
                />
            )
        })
        return (
            <div>
                <GreetingContainer />
                <ul>
                    {videos}
                </ul>
            </div>
        )
    }

}


export default VideoIndex
