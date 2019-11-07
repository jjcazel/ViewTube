import * as VideoAPI from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
// export const RECENT_UPLOAD_UI = "RECENT_UPLOAD_UI";
// export const RECEIVE_UPLOADED_VIDEO = "RECEIVE_UPLOADED_VIDEO"

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

// const receiveUploadedVideo = (video) => {
//     return {
//         type: RECEIVE_UPLOADED_VIDEO,
//         video
//     };
// };

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

export const fetchVideos = () => dispatch => {
    return VideoAPI.fetchVideos().then((videos) => {
        dispatch(receiveVideos(videos))
    }, response => { 
        console.log(response)
    })
}

export const fetchVideo = id => dispatch => {
    return VideoAPI.fetchVideo(id).then(
        video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveVideoErrors(errors)));
};

export const addLikeOrDislike = data => dispatch => {
    return VideoAPI.addLikeOrDislike(data).then(
        payload => {
            debugger
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