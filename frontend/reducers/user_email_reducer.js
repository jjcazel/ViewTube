import { RECEIVE_USER_EMAIL } from '../actions/session_actions';


export default (state = {email: ''}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_USER_EMAIL:
            return Object.assign({}, { email: action.email });
        default:
            return state;
    }
}
