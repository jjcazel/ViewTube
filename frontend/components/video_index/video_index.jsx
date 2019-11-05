import React from 'react';
import VideoIndexItem from './video_index_item';


class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      // debugger
        this.props.fetchVideos().then(() => {
          this.props.fetchUsers()
        })
    }

    render() {
        const videos = this.props.videos.map(video => {
          const user = this.props.users[video.creatorId];
        
          return (
              <VideoIndexItem
                  key={video.id}
                  video={video}
                  user={user}
              />
          )
        })
      
    return (
      <section>
        <div className='video-index'>
          <ul className='row-wrapper'>
            <div className='outer-cont.'>
              <div className='title-splash'>Trending</div>
              <div className='index-container'>
                  <li className="vid">{videos[0]}</li> 
                  <li className="vid">{videos[1]}</li> 
                  <li className="vid">{videos[2]}</li> 
                  <li className="vid">{videos[3]}</li> 
                  <li className="vid">{videos[4]}</li> 
              </div> 

            </div>
          </ul>
            <ul className="row-wrapper">
              <div className='outer-cont.'>
                <div className="title-splash"></div>
                <div className='index-container'>
                    <li className="vid">{videos[5]}</li> 
                    <li className="vid">{videos[6]}</li> 
                    <li className="vid">{videos[7]}</li>
                    <li className="vid">{videos[8]}</li>
                    <li className="vid">{videos[9]}</li>
                </div>
              </div>
            </ul>
            
            <ul className='row-wrapper'>
              <div className='outer-cont.'>
                <div className='title-splash'>Recently Uploaded</div>
                <div className='index-container'>
                  <li className="vid">{videos[videos.length - 1]}</li>
                  <li className="vid">{videos[videos.length - 2]}</li>
                  <li className="vid">{videos[videos.length - 3]}</li>
                  <li className="vid">{videos[videos.length - 4]}</li>
                  <li className="vid">{videos[videos.length - 5]}</li>
                </div>

              </div>
            </ul>
          </div>
      </section>
    )
  }

}


export default VideoIndex
