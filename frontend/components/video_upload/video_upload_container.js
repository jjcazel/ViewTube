import { connect } from 'react-redux';
import {
  createVideo,
  addUploadErrors,
} from '../../actions/video_actions';
// import clearErrors from '../../actions/session_actions'
import VideoUpload from './video_upload';

const msp = state => {
  const uploadErrors = state.errors.video;
  const otherErrors = state.errors.video.responseJSON
  return {
    uploadErrors,
    otherErrors
  };
};

const mdp = dispatch => {
  return {
    createVideo: data => dispatch(createVideo(data)),
    addUploadErrors: errors => dispatch(addUploadErrors(errors)),
    // clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(VideoUpload);