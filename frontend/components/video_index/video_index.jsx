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
            <section>
                <div >
                    <ul className='row-wrapper'>
                        <div>
                            <div className='title'>Trending</div>
                            <div className='index-container'>
                                <li className="vid1">{videos[0]}</li> 
                                <li className="vid2">{videos[1]}</li> 
                                <li className="vid3">{videos[2]}</li> 
                                <li className="vid4">{videos[3]}</li> 
                            </div> 

                        </div>
                    </ul>
                    <ul className="row-wrapper">
                        <div>
                            <div className="title"></div>
                            <div className='index-container'>
                                <li className="vid5">{videos[4]}</li> 
                                <li className="vid6">{videos[5]}</li> 
                                <li className="vid7">{videos[6]}</li> 
                                <li className="vid8">{videos[7]}</li> 
                            </div>
                        </div>
                    </ul>

                </div>
            </section>
        )
    }

}


export default VideoIndex
