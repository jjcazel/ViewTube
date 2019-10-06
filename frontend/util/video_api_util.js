export const fetchVideos = id => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${id}`
    })
)

