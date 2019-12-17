import React from 'react';
import VideoIndexItem from './video_index_item';
import SidebarContainer from '../Sidebar/sidebar_container';
// import SideBarModalContainer from '../Sidebar/sidebar_modal_container';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos(this.props.videos).then(this.props.fetchUsers());
  }

  render() {
    const videos = this.props.videos.map(video => {
    const user = this.props.users[video.creatorId];
    
    return (
      <VideoIndexItem
        key={video.id}
        video={video}
        user={user}/>
    )
    })
  if (this.props.currentUser) {
    return (
        <div className='video-index-splash'>
          <div className='outer-cont'>
            <div className='title-splash'></div>
              {/* <div className='index-container'> */}
            <span className='title-splash'>{`Recommended 
            for ${this.props.currentUser.first_name}`}</span>
              <ul className='row-wrapper'>
                <li className="vid">{videos[0]}</li> 
                <li className="vid">{videos[1]}</li> 
                <li className="vid">{videos[2]}</li> 
                <li className="vid">{videos[8]}</li> 
                {/* <li className="vid">{videos[10]}</li>  */}
                <li className="vid">{videos[5]}</li> 
                <li className="vid">{videos[6]}</li>
                <li className="vid">{videos[7]}</li>
                {/* <li className="vid">{videos[3]}</li> */}
                <li className="vid">{videos[9]}</li>
                <li className="vid">{videos[4]}</li>
                <li className="vid">{videos[11]}</li>
              </ul>
            </div>
            
            <div className='outer-cont'>
              {/* <div className='title-splash'>Recently Uploaded</div> */}
                <div className='index-container'>
                <ul className='row-wrapper'>
                  <li className="vid">{videos[videos.length - 1]}</li>
                  <li className="vid">{videos[videos.length - 2]}</li>
                  <li className="vid">{videos[videos.length - 3]}</li>
                  <li className="vid">{videos[videos.length - 4]}</li>
                  {/* <li className="vid">{videos[videos.length - 5]}</li> */}
                  {/* <li className="vid">{videos[videos.length - 6]}</li> */}
                </ul>
              </div>
            </div>
          </div>
    )
  } else {
    return (
      // <section>
        <div className='video-index-splash'>
          <div className='outer-cont'>
            <div className='title-splash-top'>Trending</div>
              <div className='index-container'>
              <ul className='row-wrapper'>
                <li className="vid">{videos[0]}</li>
                <li className="vid">{videos[1]}</li>
                <li className="vid">{videos[2]}</li>
                <li className="vid">{videos[8]}</li>
                <li className="vid">{videos[10]}</li>
                <li className="vid">{videos[5]}</li>
              </ul>
              </div>
            </div>
            <div className='outer-cont'>
              <div className="title-splash"></div>
              <div className='index-container'>
              <ul className="row-wrapper">
                <li className="vid">{videos[6]}</li>
                <li className="vid">{videos[7]}</li>
                <li className="vid">{videos[3]}</li>
                <li className="vid">{videos[9]}</li>
                <li className="vid">{videos[4]}</li>
                <li className="vid">{videos[11]}</li>
              </ul>
              </div>
            </div>

            <div className='outer-cont'>
              <div className='title-splash'>Recently Uploaded</div>
              <div className='index-container'>
              <ul className='row-wrapper'>
                <li className="vid">{videos[videos.length - 1]}</li>
                <li className="vid">{videos[videos.length - 2]}</li>
                <li className="vid">{videos[videos.length - 3]}</li>
                <li className="vid">{videos[videos.length - 4]}</li>
                <li className="vid">{videos[videos.length - 5]}</li>
                <li className="vid">{videos[videos.length - 6]}</li>
              </ul>
              </div>
            </div>
          </div>
        // </section>
      )
    }
  }
}

export default VideoIndex;
