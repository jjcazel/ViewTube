import {
    RECEIVE_VIDEO,
    RECEIVE_VIDEOS,
    RECEIVE_SEARCH_VIDEOS
} from '../../actions/video_actions';

import { merge } from 'lodash'

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            let views = action.views ? Object.keys(action.views).length : 0;
            let videoId = Object.keys(action.video)[0]
            action.video[videoId].views = views;
            return merge(newState, action.video);

        case RECEIVE_VIDEOS:
            Object.keys(action.videos).forEach(video => {
                let views = action.videos[video].views ? Object.keys(action.videos[video].views).length : 0;
                action.videos[video].views = views;
            })
            return merge(newState, action.videos);

        case RECEIVE_SEARCH_VIDEOS:
            return merge({}, action.videos)
            
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
//       comment_ids: [1, 2, 3],
//       comments_count: 3,
//       created_at: "Nov 6, 2019"
//    },