import React from 'react'
import VideoIndexContainer from '../video_index/video_index_container';


class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    
    }

    componentDidMount(){
        const videoId = this.props.match.params.videoId
        debugger
        this.props.fetchVideo(videoId).then(response => {
            this.props.fetchUser(response.video[videoId].creatorId)})
    }

    render() {
        // debugger
        const video = this.props.video
        return (
            <div className='video-show'>

                <video width="320" height="240" controls>
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div>{video.title}</div>
                <div>{video.description}</div>
                <div>{this.props.creator.first_name} {this.props.creator.last_name}</div>

                {/* <VideoIndexContainer /> */}
              
            </div>
        )
    }
}

export default VideoShow
