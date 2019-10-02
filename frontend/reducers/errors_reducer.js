import { combineReducers } from "redux";
import sessionErrorsReducer from './sessions_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
});

export default errorsReducer;


// errors: {
//     session: []
//   }
// }

// errors: {
//   session: ["Invalid credentials"];
// }