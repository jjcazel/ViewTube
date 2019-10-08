import { connect } from 'react-redux';
import RightSidebar from './right_sidebar';
import { fetchVideos } from '../../actions/video_actions';

const msp = state => {
    // debugger
    return {
        videos: Object.values(state.entities.videos),
        // users: 

    }
}

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(msp, mdp)(RightSidebar)