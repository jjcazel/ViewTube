import React from 'react'
import RightSidebarContainer from '../video_show/right_sidebar_container';
import GreetingContainer from '../greeting/greeting_container'

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0
    }
  
  }

  componentDidMount(){
    const videoId = this.props.match.params.videoId
    this.props.fetchVideo(videoId).then(response => {
      this.props.fetchUser(response.video[videoId].creatorId)})
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.videoId !== this.props.match.params.videoId ){
      this.props.fetchVideo(this.props.match.params.videoId).then(response => {
        this.props.fetchUser(response.video[this.props.match.params.videoId].creatorId)
      })
    }
  }

  renderVideo(video){
    return (
      <video key={video.videoUrl} width="520" height="400" controls autoPlay className='video'>
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  render() {
    const video = this.props.video
    if(!video){
        return null
    }
    return (
      <>
        <div className="nav">
            <GreetingContainer />
        </div>
        <>
        <section className="show-form">
          <div className="video-show">

            {this.renderVideo(video)}
        
            <div className="title">{video.title}
              <div className="video-show-cont">
                <span className='left-title-span'>
                  <p className="views-show"># views</p>
                  <p className="date">{video.created_at}</p> 
                </span>
                <span className='like-shares-span'>
                  <div className='single-like-cont'>
                    <img className="thumbs-gray"src={window.thumbsUpUrl}></img>
                    <div className='like-text'>1</div>
                  </div>
                  <div className='single-like-cont'>
                    <img className="thumbs-gray"src={window.thumbsDownUrl}></img>
                    <div className='like-text'>0</div>
                  </div>
                </span>
              </div>
            </div>
            <section className='content'>
              <div className="creator">{this.props.creator.first_name} {this.props.creator.last_name}</div>
              <div className="description">{video.description}</div>
            </section>
          </div>

          <div className='rightsidebar'>
            <h2 className='up-next'>Up next</h2>
            <RightSidebarContainer />
          </div>
        </section>
      </>
    </>
  )}
}

export default VideoShow
