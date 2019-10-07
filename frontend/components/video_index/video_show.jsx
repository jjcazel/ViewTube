import React from 'react'
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';
import { connect } from 'react-redux'

const msp = state => ({
    videos: state.entities.videos,

})

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),

})

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    componentDidMount(){
        this.props.fetchVideos();
    }

    render() {
        debugger
        if (this.props.videos) {
            return (
                <div className=''>
                    <h1>Videos go here</h1>
                    {/* <VideoIndex /> */}
                </div>
            )

        }
    }
}

export default connect(msp, mdp)(VideoShow)
