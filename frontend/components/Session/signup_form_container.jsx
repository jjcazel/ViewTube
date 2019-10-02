import { connect } from 'react-redux'
import  SessionForm  from './session_form';
import { signup } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    const errors = [];
    const formType = signup;

    return { errors, formType }
}

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm);