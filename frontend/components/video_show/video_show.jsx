import React from 'react'
import RightSidebarContainer from '../video_show/right_sidebar_container';
import GreetingContainer from '../greeting/greeting_container'

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    
    }

    componentDidMount(){
        const videoId = this.props.match.params.videoId
        this.props.fetchVideo(videoId).then(response => {
            this.props.fetchUser(response.video[videoId].creatorId)})
    }

    render() {
        const video = this.props.video
        if(!video){
            return null
        }
        return (
            <>
                <div className='nav'>
                    <GreetingContainer />
                </div>
                
                <section className="show-form">
                    <div className='video-show'>

                        <video width="520" height="400" controls class='video'>
                            <source src={video.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <br/>
                        <div className="title">{video.title}</div>
                        <br/>
                        <br/>
                        <div className="creator">{this.props.creator.first_name} {this.props.creator.last_name}</div>
                        <br/>
                        <br/>
                        <div className="description">{video.description}</div>

                    </div>

                    <div className='rightsidebar'>
                        <RightSidebarContainer />
                    </div>
                    <br/>
                </section>
            </>
        )
    }
}

export default VideoShow
