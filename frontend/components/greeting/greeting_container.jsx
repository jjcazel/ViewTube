import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import {
    updateSearchField,
    spaceToPlay,
} from '../../actions/ui_actions';
import Greeting from './greeting'
import { fetchVideos } from '../../actions/video_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    videos: state.entities.videos
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchVideos: (search) => dispatch(fetchVideos(search)),
    updateSearchField: search => dispatch(updateSearchField(search)),
    spaceToPlay: boolean => dispatch(spaceToPlay(boolean)),
})

export default connect(msp, mdp)(Greeting);