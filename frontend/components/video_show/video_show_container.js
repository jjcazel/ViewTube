import { connect } from 'react-redux';
import VideoShow from './video_show';

import { fetchVideo, addLikeOrDislike, addView, } from '../../actions/video_actions';
import { fetchUser } from '../../actions/users_actions';

const msp = (state, ownProps) => {
    const videoId = ownProps.match.params.videoId;
    const video = state.entities.videos[ownProps.match.params.videoId] 
    let creator = !video || !state.entities.users[video.creatorId]  ? { first_name: '', last_name: '' } : state.entities.users[video.creatorId]
    const currentUser = state.entities.users[state.session.id];    
    return {  videoId, video, creator, currentUser }
}

const mdp = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    addLikeOrDislike: data => dispatch(addLikeOrDislike(data)),
    addView: id => dispatch(addView(id)),
})

export default connect(msp, mdp)(VideoShow);