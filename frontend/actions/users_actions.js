import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    };
};

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

const receiveUserErrors = (errors) => {
    return {
        type: RECEIVE_USERS_ERRORS,
        errors
    };
};

export const fetchUsers = () => dispatch => {
    return UserAPI.fetchUsers().then(
        users => dispatch(receiveUsers(users)))
}

export const fetchUser = id => dispatch => {
    return UserAPI.fetchUser(id).then(
        userObj => dispatch(receiveUser(userObj)),
        errors => dispatch(receiveUserErrors(errors))
    );
};