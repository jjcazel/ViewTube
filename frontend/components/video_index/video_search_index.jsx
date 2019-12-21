import React from 'react';
import VideoSearchIndexItem from './video_search_index_item';
import SidebarContainer from '../Sidebar/sidebar_container';


class VideoSearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.search === 'undefined') {
      this.props.search = [];
    }
    this.props.fetchVideos({ search: this.props.search }).then(() => {
      this.props.fetchUsers()
      // .then(this.props.history.push('/'))
    });
  }

  render() {
    const videos = this.props.videos.map(video => {
    const user = this.props.users[video.creatorId];

    return (
      <VideoSearchIndexItem
        key={video.id}
        video={video}
        user={user} />
    )
  })
    return (
      <section>
        <div className='video-index'>
          <div className='outer-container-2'>
            <div className="side-bar-whole-2"><SidebarContainer /></div>
              <ul className='row-wrapper-search'>
                <div className='index-container-search'>
                <div className='search-splash-top'>{`Search Results for "${this.props.search}"`}</div>
                <li className="vid-search">{videos.slice(0, videos.length)}</li>
              </div> 
            </ul>
          </div>
        </div>
      </section>
    )
  }
}


export default VideoSearchIndex;