import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/users_actions';
import CommentIndex from './video_comment_index';

const msp = (state, myProp) => {
  return {
    // users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    comments: Object.values(state.entities.comments).filter(comment => {
      return comment.video_id === myProp.videoId
    }),
  };
};

const mdp = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

// CommentIndexContainer
export default connect(msp, mdp)(CommentIndex);