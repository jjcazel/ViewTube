import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const RECEIVE_USER_EMAIL = 'RECEIVE_USER_EMAIL'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});
export const receiveUserEmail = email => ({
    type: RECEIVE_USER_EMAIL,
    email
});

const logoutCurrentUser = user => ({
    type: LOGOUT_CURRENT_USER,
    user
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const acct_validation = id => dispatch => {
    return APIUtil.acct_validation(id);
}

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)), error => {
            
            dispatch(receiveErrors( error.responseJSON[0]))})
}


export const signup = formUser => dispatch => {
    return APIUtil.signup(formUser)
        .then(user => dispatch(receiveCurrentUser(user)), errors => {
            
            dispatch(receiveErrors(Object.values(errors.responseJSON)))
        });
}

export const logout = () => dispatch => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
}

export const demoLogin = () => dispatch => {
    const user = {
        email: 'Demo@gmail.com',
        password: 'password1'
    }
    return dispatch(login(user))
}