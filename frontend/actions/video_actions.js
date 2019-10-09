import * as VideoAPI from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';

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

const receiveVideoErrors = errors => ({ 
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const fetchVideos = () => dispatch => {
    return VideoAPI.fetchVideos().then((videos) => {
        dispatch(receiveVideos(videos))
    }, response => { 
        console.log(response)
    })
}

export const fetchVideo = id => dispatch => 
    return VideoAPI.fetchVideo(id).then(
        video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveVideoErrors(errors)));
};