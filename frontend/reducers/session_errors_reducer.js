import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from "../actions/session_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS:
            // return Object.assign({}, { errors: action.errors });
            return [action.error];
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
}

// { errors : 
//   { sessions : [error1, error2, error3]
//   } 
// }