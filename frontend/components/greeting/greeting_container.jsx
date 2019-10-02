import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Greeting from './greeting'

const msp = state => ({
    currentUser: state.entities.users[state.session.id],

})

const mdp = dispatch => ({
    logout: (user) => dispatch(logout(user))
})

export default connect(msp, mdp)(Greeting);