import { connect } from 'react-redux';
import VideoShow from './video_show';

import { fetchVideo } from '../../actions/video_actions';
import { fetchUser } from '../../actions/users_actions';

const msp = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId] 
    let creator = !video || !state.entities.users[video.creatorId]  ? { first_name: '', last_name: '' } : state.entities.users[video.creatorId]
        
    return { video, creator }
}

const mdp = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)),
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(VideoShow);