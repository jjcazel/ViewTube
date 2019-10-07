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

class VideoApp extends React.Component {
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
        return (
            <div className=''>
                {/* <h2>{this.props.formType}</h2> */}
                { <VideoIndex />}
            <h1>Here are videos</h1>
            </div>
        )
    }
}

export default connect(msp, mdp)(VideoApp)
