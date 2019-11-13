import React from 'react';
import VideoSearchIndexItem from './video_search_index_item';


class VideoSearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos({ search: this.props.search });
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
            <div className='title-splash-top'>{`Recommended for ${this.props.currentUser.first_name}`}</div>
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
        </div>
      </section>
    )



export default VideoSearchIndex;