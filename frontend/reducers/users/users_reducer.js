import { RECEIVE_CURRENT_USER} from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS} from '../../actions/users_actions';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        case RECEIVE_USERS:    
            return Object.assign({}, action.users)
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