import { connect } from 'react-redux';
import RightSidebar from './right_sidebar';
import { fetchVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router'
import { fetchUsers } from '../../actions/users_actions'

const msp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos).filter(video => {
            return video.id !== Number(ownProps.match.params.videoId)
        }),
        users: state.entities.users,
        currentUserId: state.session.id
    }
}

const mdp = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default withRouter(connect(msp, mdp)(RightSidebar))