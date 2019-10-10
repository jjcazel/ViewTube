import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Dropdown from './dropdown'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Dropdown);