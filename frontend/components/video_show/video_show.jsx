import React from 'react'
import VideoIndexContainer from '../video_index/video_index_container';
import { fetchVideo } from '../../actions/video_actions';
import { connect } from 'react-redux'

const msp = state => ({
    // video: state.entities.videos,

})

const mdp = dispatch => ({
    fetchVideo: (id) => dispatch(fetchVideo(id)),

})

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.id);
    }

    render() {
        debugger
        return (
            <div className='video-show'>
                <video width="320" height="240" controls>
                    <source src={video.photoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* <VideoIndexContainer /> */}
              
            </div>
        )
    }
}

export default connect(msp, mdp)(VideoShow)
