import { connect } from 'react-redux'
import  SignUp  from './signup_form';
import { signup, receiveErrors } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    let errors;
    if (state.errors.session){
        errors = state.errors.session;
    } else {
        errors = [];
    }
    // const formType = 'create account';
    // const user = {
    //     firstName: '',
    //     LastName: '',
    //     email: '',
    //     password: ''
    // };

    return { 
        errors, 
        // user 
    }
}

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(msp, mdp)(SignUp);