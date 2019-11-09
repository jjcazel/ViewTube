import { connect } from 'react-redux'
import  SignUp  from './signup_form';
import { signup, receiveErrors } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    let errors;
    let fNameError;
    if (state.errors.session){
        errors = state.errors.session;
        fNameError = errors[0];

    } else {
        errors = [];
    }
    const formType = 'SignUp';
    // const user = {
    //     firstName: '',
    //     LastName: '',
    //     email: '',
    //     password: ''
    // };

    return { 
        errors, 
        fNameError,
        formType 
    }
}

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(msp, mdp)(SignUp);