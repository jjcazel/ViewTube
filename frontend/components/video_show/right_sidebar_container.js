import { connect } from 'react-redux';
import RightSidebar from './right_sidebar';
import { fetchVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router'

const msp = (state, ownProps) => {
    debugger
    return {
        videos: Object.values(state.entities.videos).filter(video => {
            return video.id !== Number(ownProps.match.params.videoId)
        }),
        users: state.entities.users,
        currentUserId: state.session.id
    }
}

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default withRouter(connect(msp, mdp)(RightSidebar))