import React from 'react';
import { Link } from 'react-router-dom';


class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newCommentBody: '',
    }
  }

  update(e) {
    this.setState({ newCommentBody: e.target.value });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ newCommentBody: '' });
  }

  handleComment(e) {
    e.preventDefault();
    this.props.postComment(this.props.videoId, this.state.newCommentBody);
    this.setState({ newCommentBody: '', });
  }

  render() {
    let currentUser = this.props.currentUser;
    const commentButton = this.state.newCommentBody.length > 0 ?
      <button
        className='comment-comment-btn-blue'
        onClick={this.handleComment.bind(this)}
      >
        COMMENT
      </button>
      : <button className='comment-comment-btn'>COMMENT</button>;


    const commentInput = currentUser ?
      <input
        type="text"
        value={this.state.newCommentBody}
        onChange={this.update.bind(this)}
        className="comment-input-text"
        placeholder="Add a public comment..."
      />
      :
      <Link to={`/signin`}>
        <input
          type="text"
          value={this.state.newCommentBody}
          onChange={this.update.bind(this)}
          className="comment-input-text"
          placeholder="Add a public comment..."
        />
      </Link>

    const commentIcon = currentUser ?
      <div className="comment-input-icon">
        <p>{currentUser[0]}</p> {/* first letter of first name */}
      </div>
      : <div className="comment-input-icon">
        <i className="fas fa-user-circle"></i>
      </div>;

    return (
      <div className='comment-form'>
        <div className='comments-count'>
          <p>{this.props.comments.length} Comments</p>
        </div>
        <div className='comment-input'>
          {commentIcon}
          {commentInput}
        </div>
        <div className='comment-form-buttons'>
          <div className='comment-buttons-div'>
            <button
              className='comment-cancel-btn'
              onClick={this.handleCancel.bind(this)}
            >
              CANCEL
              </button>
            {commentButton}
          </div>
        </div>
      </div>
    );
  };
};

export default CommentForm;