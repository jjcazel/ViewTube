// post a comment
export const postComment = (video_id, body) => {
  return $.ajax({
    type: `POST`,
    url: `/api/videos/${video_id}/comments`,
    data: { body },
  });
};

// delete a comment
export const deleteComment = (id) => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/comments/${id}`,
  });
};