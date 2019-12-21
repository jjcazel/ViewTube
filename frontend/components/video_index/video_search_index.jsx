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
      window.scrollTo(0, 0);
    });
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);
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
                {videos.length > 0 ? (
                  videos
                ) : (
                    <main className="search-index-no-results">
                      <p className="no-result-message">Sorry! We can't seem to find any videos that match "{this.props.search}"</p>
                    </main>
                  )}  
                
              </div> 
            </ul>
          </div>
        </div>
      </section>
    )
  }
}


export default VideoSearchIndex;