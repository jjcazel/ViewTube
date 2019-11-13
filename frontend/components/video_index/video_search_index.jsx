import React from 'react';
import VideoSearchIndexItem from './video_search_index_item';


class VideoSearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
          <div className='outer-cont'>
            <div className='title-splash-top'></div>
            <div className='index-container-search'>
              <ul className='row-wrapper-search'>
                <li className="vid-search">{videos[0]}</li>
                <li className="vid-search">{videos[1]}</li>
                <li className="vid-search">{videos[2]}</li>
                <li className="vid-search">{videos[3]}</li>
                <li className="vid-search">{videos[4]}</li>
                <li className="vid-search">{videos[5]}</li>
                <li className="vid-search">{videos[6]}</li>
              </ul>
            </div> 
          </div>
        </div>
      </section>
    )
  }
}


export default VideoSearchIndex;