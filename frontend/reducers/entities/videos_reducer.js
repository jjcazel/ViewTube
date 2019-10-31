import {
    RECEIVE_VIDEO,
    RECEIVE_VIDEOS,
    RECEIVE_UPLOADED_VIDEO,

} from '../../actions/video_actions';

import { merge } from 'lodash'

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_VIDEO:
            return merge(newState, action.video);

        case RECEIVE_VIDEOS:
            return merge(newState, action.videos);
            
        case RECEIVE_UPLOADED_VIDEO:
            return merge(newState.action.video)
        default:
            return newState;
    }
}

export default videosReducer;

// videos: { 
//    25: { 
//       id: 25,
//       creatorId: 62,
//       title: "She kissed my girlfriend!",
//       description: "Things got heated...",
//       likes: 432786,
//       dislikes: 1,
//       videoURL: "?",
//       commentsId: [33, 55, 9],
//       created?: "2 Days"
//    },