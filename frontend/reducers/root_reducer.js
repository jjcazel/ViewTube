import { combineReducers } from "redux";

import entitiesReducer from '../reducers/entities_reducer';
import errorsReducer from '../reducers/errors_reducer';
import sessionReducer from '../reducers/session_reducer'
import userEmailReducer from '../reducers/user_email_reducer';

export default combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    userEmail: userEmailReducer
})