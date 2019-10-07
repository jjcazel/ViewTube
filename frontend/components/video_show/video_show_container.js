import { connect } from 'react-redux';
import VideoShow from './video_show';

import { fetchVideo } from '../../actions/video_actions';

const msp = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId];
    const creator = {};
    const currentUser = state.entities.users[state.session.id]

    return { video, creator, currentUser}
}

const mdp = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video))
})

export default connect(msp, mdp)(VideoShow);