import {
  UPDATE_SEARCH_FIELD,
  SPACE_TO_PLAY,
  COLLAPSE_SIDEBAR,
  EXPAND_SIDEBAR,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions/ui_actions";
import { merge } from "lodash";

let defaultState = {
  expand: true,
  modal: false,
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case EXPAND_SIDEBAR:
      newState.expand = true;
      return newState;

    case COLLAPSE_SIDEBAR:
      newState.expand = false;
      return newState;

    case OPEN_MODAL:
      newState.modal = true;
      return newState;

    case CLOSE_MODAL:
      newState.modal = false;
      return newState;

    case UPDATE_SEARCH_FIELD:
      return merge(newState, { search: action.search });

    case SPACE_TO_PLAY:
      return merge(newState, { spaceToPlay: action.spaceToPlay });

    default:
      return newState;
  }
};

export default uiReducer;
