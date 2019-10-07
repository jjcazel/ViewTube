import { RECEIVE_CURRENT_USER} from '../../actions/session_actions';
import { RECEIVE_USER} from '../../actions/users_actions';

export default (state = {}, action) => {
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })

        default:
            return state;
    }
}

// {
//   entities: {
//     users: {
//       1: {
//         id: 1,
//         username: 'breakfast'
//       }
//     }
//   },