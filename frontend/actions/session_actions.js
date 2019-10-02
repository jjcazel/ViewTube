import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = user => ({
    type: LOGOUT_CURRENT_USER,
    user
});

const receiveErrors = error => ({
    type: RECEIVE_ERRORS,
    error
});

export const acct_validation = id => dispatch => {
    return APIUtil.acct_validation(id).then(user => dispatch(receiveCurrentUser(user)));
}

export const login = user => dispatch => {
    return APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)));
}

export const signup = formUser => dispatch => {
    return APIUtil.signup(formUser).then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
}

export const demoLogin = () => dispatch => {
    const user = {
        username: 'user',
        password: 'password'
    }
    return dispatch(login(user))
}