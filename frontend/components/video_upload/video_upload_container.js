import { connect } from 'react-redux';
import {
  createVideo,
  addUploadErrors,
} from '../../actions/video_actions';
import VideoUpload from './video_upload';

const msp = state => {
  // debugger
  // const lastVideoUploadId = state.entities.videos.id;
  const uploadErrors = state.errors.videos;

  return {
    // lastVideoUploadId,
    uploadErrors,
  };
};

const mdp = dispatch => {
  return {
    createVideo: data => dispatch(createVideo(data)),
    addUploadErrors: errors => dispatch(addUploadErrors(errors)),
  };
};

export default connect(msp, mdp)(VideoUpload);