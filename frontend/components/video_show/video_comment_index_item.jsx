import React from 'react';

const CommentIndexItem = ({ comment, currentUser, deleteComment }) => {
  // comment is pojo like below
  // comment: {
  //   id: 2,
  //   body: 'this is comment body',
  //   author_id: 14,
  //   video_id: 9,
  //   username: "test-author-2"
  // }


  const deleteButton = currentUser ?
    currentUser.id === comment.author_id ?
      <button
        className="comment-delete-btn"
        onClick={() => { deleteComment(comment.id) }}
      >
        DELETE
      </button>
      : <div></div>
    : <div></div>;


  // debugger
  return (
    <div className="comment-item">
      <div className="comment-item-icon">
        <p>{comment.username[0]}</p>
      </div>
      <div className="comment-username-body">
        <div className="comment-username">
          {/* comment username */}
          {comment.username}
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