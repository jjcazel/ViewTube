import { connect } from 'react-redux';
import VideoShow from './video_show';

import { fetchVideo } from '../../actions/video_actions';
import { fetchUser } from '../../actions/users_actions';

const msp = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId] || {photoUrl: '', title: '', description: ''}
    const creator = state.entities.users[video.creator_id] || {first_name: '', last_name: ''} 
    const currentUser = state.entities.users[state.session.id]
    debugger
    return { video, creator, currentUser}
}

const mdp = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)),
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(VideoShow);