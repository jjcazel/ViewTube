import React from 'react';
import CommentIndexItem from './video_comment_index_item';
// import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
    };
  };


  render() {
    let currentUser = this.props.currentUser;
    let comments = this.props.comments.map((comment, i) => {
      return <CommentIndexItem
        key={i}
        comment={comment}
        currentUser={currentUser}
        deleteComment={this.props.deleteComment}
      />;
    })

    return (
      <div>
        <ul>{comments}</ul>
      </div>
    );
  };
};

export default CommentIndex;
