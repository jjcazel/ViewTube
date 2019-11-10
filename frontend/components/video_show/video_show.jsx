import React from 'react'
import RightSidebarContainer from '../video_show/right_sidebar_container';
import GreetingContainer from '../greeting/greeting_container'
import CommentFormContainer from './comment_form_container';
import CommentIndexContainer from './video_comment_container';
require("history").createHashHistory;

class VideoShow extends React.Component {
  constructor(props) {
    super(props);

    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
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

  ensureLoggedIn() {
    if (!this.props.currentUser) {
      createHistory().push('/signin');
    }
  }

  like() {
    this.ensureLoggedIn();
    const data = {
      videoId: this.props.videoId,
      isDislike: false,
    };
    this.props.addLikeOrDislike(data);
  }

  dislike() {
    this.ensureLoggedIn();
    const data = {
      videoId: this.props.videoId,
      isDislike: true,
    };
    this.props.addLikeOrDislike(data);
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
    let thumbsUp;
    let thumbsDown;

    if(!video){
      return null
    }

    if (video.currentUserDislikes === "true") {
      thumbsDown = window.thumbsDownBlueUrl;
    } else {
      thumbsDown = window.thumbsDownUrl
    }
    if (video.currentUserDislikes === "false") {
      thumbsUp = window.thumbsUpBlueUrl;
    } else {
      thumbsUp = window.thumbsUpUrl
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
                  <img className="thumbs-gray"src={thumbsUp} onClick={this.like}></img>
                  <div className='like-text'>{video.likes}</div>
                </div>
                <div className='single-like-cont'>
                  <img className="thumbs-gray"src={thumbsDown} onClick={this.dislike}></img>
                  <div className='like-text'>{video.dislikes}</div>
                </div>
              </span>
            </div>
          </div>
          <section className='content'>
            <div className="creator">{this.props.creator.first_name} {this.props.creator.last_name}</div>
            <div className="description">{video.description}</div>
          </section>

              {/* Comments section  */}
              <CommentFormContainer
                videoId={this.props.video.id}
                // currentUser={currentUser}
              />

              <CommentIndexContainer
                videoId={this.props.video.id}
                // currentUser={currentUser}
              />
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
