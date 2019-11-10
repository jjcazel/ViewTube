import * as VideoAPI from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const RECEIVE_SEARCH_VIDEOS = 'RECEIVE_SEARCH_VIDEOS';

export const recentUploadUI = payload => {
    return {
        type: RECENT_UPLOAD_UI,
        videoId: Object.keys(payload.videos)[0],
    };
};
const receiveVideos = ( videos ) => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
};

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveSearchVideos = ({ users, videos }) => {
  return {
    type: RECEIVE_SEARCH_VIDEOS,
    users,
    videos,
  };
};

export const addUploadErrors = errors => {
    return {
        type: RECEIVE_VIDEO_ERRORS,
        errors,
    }
}

const receiveVideoErrors = errors => ({ 
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const createVideo = data => dispatch => {
    return VideoAPI.createVideo(data).then(
        payload => dispatch(receiveVideo(payload)),
        errors => dispatch(receiveVideoErrors(errors)))
};

export const getVideosComments = () => {
    return (dispatch) => {
        return VideoAPIUtil.getVideosComments().then(
            (payload) => dispatch({ type: RECEIVE_VIDEOS, payload }),
            (err) => dispatch(receiveVideoErrors(err.responseJSON))
        );
    };
};

// export const fetchVideos = () => dispatch => {
//     return VideoAPI.fetchVideos().then((videos) => {
//         dispatch(receiveVideos(videos))
//     }, response => { 
//         console.log(response)
//     })
// }

export const fetchVideos = search => dispatch => {

    if (search && search.search) {

        return VideoAPI.fetchVideos(search).then(
            payload => dispatch(receiveSearchVideos(payload)),
            errors => dispatch(receiveVideoErrors(errors))
        );

    } else {

        return VideoAPI.fetchVideos(search).then(
            payload => dispatch(receiveVideos(payload)),
            errors => dispatch(receiveVideoErrors(errors))
        );

    }
}

export const fetchVideo = id => dispatch => {
    return VideoAPI.fetchVideo(id).then(
        video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveVideoErrors(errors)));
};

export const addLikeOrDislike = data => dispatch => {
    return VideoAPI.addLikeOrDislike(data).then(
        payload => {
            dispatch(receiveVideo(payload))},
        errors => dispatch(receiveVideoErrors(errors))
    );
};

// export const fetchUploadedVideos = id => dispatch => {
//     return VideoAPI.fetchUploadedVideos(id).then(
//         files => dispatch(receiveVideos(files)),
//         errors => dispatch(receiveVideoErrors(errors))
//     );
// };

// export const fetchUploadedVideo = id => dispatch => {
//     return VideoAPI.fetchUploadedVideo(id).then(
//         video => dispatch(receiveUploadedVideo(video)),
//         errors => dispatch(receiveVideoErrors(errors))
//     );
// };