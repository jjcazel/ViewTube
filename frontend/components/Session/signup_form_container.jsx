import { connect } from 'react-redux'
import  SessionForm  from './session_form';
import { signup, receiveErrors } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    const errors = [];
    const formType = 'create account';

    return { errors, formType }
}

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: () => dispatch(recevieErrors())
})

export default connect(msp, mdp)(SessionForm);