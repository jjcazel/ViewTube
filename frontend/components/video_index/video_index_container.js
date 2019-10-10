import { connect } from 'react-redux';
import VideoIndex from  './video_index';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/users_actions';

const msp = state => {
    return {
        videos: Object.values(state.entities.videos),
        users: state.entities.users

    }
}

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(msp, mdp)(VideoIndex)