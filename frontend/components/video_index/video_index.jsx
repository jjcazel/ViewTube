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
        this.props.fetchVideos().then(() => {
            this.props.fetchUsers()
        })
    }

    render() {
        const videos = this.props.videos.map(video => {
            const user = this.props.users[video.creatorId];

            return (
                <VideoIndexItem
                    key={video.id}
                    video={video}
                    user={user}
                />
            )
        })
        return (
            <div >
                <ul className='index-container'>
                    <li>
                        <div className='trending'>Trending</div>
                        <br/>
                        <br/>
                        {videos}
                    </li> 
                </ul>
            </div>
        )
    }

}


export default VideoIndex
