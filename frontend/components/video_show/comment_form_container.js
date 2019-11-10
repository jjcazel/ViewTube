import { connect } from 'react-redux';
import { postComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = (state, myProp) => {
  debugger
  return {
    currentUser: state.entities.users,
    comments: Object.values(state.entities.comments).filter(comment => {
      return comment.video_id === myProp.videoId
    }),
  };
};

const mdp = (dispatch) => {
  return {
    postComment: (video_id, body) => dispatch(postComment(video_id, body)),
  };
};

export default connect(msp, mdp)(CommentForm);