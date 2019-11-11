import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndex from './video_comment_index';

const msp = (state, myProp) => {
  return {
    currentUser: state.entities.users[state.session.id],
    comments: Object.values(state.entities.comments).filter(comment => {
      return comment.video_id === myProp.videoId
    }),
  };
};

const mdp = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

// CommentIndexContainer
export default connect(msp, mdp)(CommentIndex);