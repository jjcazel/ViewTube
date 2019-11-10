import {
  UPDATE_SEARCH_FIELD,
  SPACE_TO_PLAY,
} from '../actions/ui_actions';
import { merge } from 'lodash';

const uiReducer = (state, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {

    case UPDATE_SEARCH_FIELD:
      return merge(newState, { search: action.search });

    case SPACE_TO_PLAY:
      return merge(newState, { spaceToPlay: action.spaceToPlay });

    default:
      return newState;
  }
};

export default uiReducer;