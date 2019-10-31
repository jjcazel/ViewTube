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

export const fetchUploadedVideos = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${id}/uploaded`
    });
};

export const createVideo = data => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/videos`,
        data: data,
        contentType: false,
        processData: false
    });
};


