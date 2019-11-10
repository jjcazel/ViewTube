import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const postComment = (video_id, body) => {
  return (dispatch) => {
    return CommentAPIUtil.postComment(video_id, body).then(
      (comment) => dispatch({ type: RECEIVE_COMMENT, comment }),
    );
  };
};

export const deleteComment = (id) => {
  return (dispatch) => {
    return CommentAPIUtil.deleteComment(id).then(
      (comment) => dispatch({ type: DELETE_COMMENT, commentId: comment.id }),
    );
  };
};