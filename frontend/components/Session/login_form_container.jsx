import { connect } from 'react-redux'
import  SessionForm  from './session_form';
import { login } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    const errors = [];
    const formType = login;

    return { errors, formType }
}

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm);