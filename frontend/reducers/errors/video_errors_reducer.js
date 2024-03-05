import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO_ERRORS,
} from "../../actions/video_actions";
import { merge } from "lodash";

const videosErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = [];

  switch (action.type) {
    case RECEIVE_VIDEO_ERRORS:
      return merge(newState, action.errors);

    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
      return newState;

    default:
      return newState;
  }
};

export default videosErrorsReducer;
