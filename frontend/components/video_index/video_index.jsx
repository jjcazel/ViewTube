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
    });

    const title = this.props.currentUser ? 'Recommended' : 'Trending';
    return (
      <div className='video-index-splash'>
        <div className='outer-container'>
        <SidebarContainer/>
          <section className='row-wrapper'>
          <span className='title-splash'>{title}</span>
            <div className='inner-container'>{videos.slice(0, videos.length)}</div> 
          </section>
        </div>
      </div>
    )
  } 
}

export default VideoIndex;
