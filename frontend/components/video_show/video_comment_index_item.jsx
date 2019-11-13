import React from 'react';

const CommentIndexItem = ({ comment, currentUser, deleteComment }) => {
  // comment is pojo like below
  // comments: {
  //   id: 2,
  //   body: 'this is comment body',
  //   user_id: 14,
  //   username: 'user's first and last name' ?
  //   video_id: 9
  // }


  const deleteButton = currentUser ?
    currentUser.id === comment.user_id ?
      <button
        className="comment-delete-btn"
        onClick={() => { deleteComment(comment.id) }}
      >
        DELETE
      </button>
      : <div></div>
    : <div></div>;
  
  return (
    <div className="comment-item">
      <div className="comment-item-icon">
        <p>{comment.first_name[0]}</p>
      </div>
      <div className="comment-username-body">
        <div className="comment-username">
          {/* commenter name */}
          {`${comment.first_name} ${comment.last_name}`} {/* need to make this the user's first and last name */}
        </div>
        <div className="comment-body">
          {/* comment body */}
          {comment.body}
        </div>
      </div>
      <div className="comment-delete">
        {/* delete button holder */}
        {deleteButton}
      </div>
    </div>
  );
};

export default CommentIndexItem;