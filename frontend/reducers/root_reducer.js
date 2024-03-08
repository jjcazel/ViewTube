import { combineReducers } from "redux";

import entitiesReducer from "../reducers/entities/entities_reducer";
import errorsReducer from "./errors/errors_reducer";
import sessionReducer from "../reducers/session_reducer";
import uiReducer from "./ui_reducer";

export default combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  ui: uiReducer,
});
