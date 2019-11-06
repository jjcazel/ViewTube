export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/videos'
    })
)

export const fetchVideo = id => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${id}`
    })
)

// export const fetchUploadedVideos = id => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/users/${id}/uploaded`
//     });
// };

export const addLikeOrDislike = data => {

    const id = data.videoId;
    const is_dislike = {
        like: { is_dislike: data.isDislike }
    };

    return $.ajax({
        method: 'POST',
        url: `/api/videos/${id}/likes`,
        data: is_dislike,
    });
};

export const createVideo = data => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `/api/videos`,
        data: data,
        contentType: false,
        processData: false
    });
};


