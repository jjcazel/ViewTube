import React from 'react';
import { Link } from 'react-router-dom';

class VideoUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileUrl: null,
      title: '',
      description: '',
      loading: false,
    }

    this.handleFile = this.handleFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lastVideoUploadId !== this.props.lastVideoUploadId) {
      createHistory().push(`/videos/${this.props.lastVideoUploadId}`);
    }
  }

  changeField(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  cancelUpload() {
    this.setState({
      file: null,
      title: '',
      description: '',
    });
  }

  handleFile(e) {
    this.addFileToState(e.target.files);
  }

  addFileToState(files) {
    if (files.length > 1) {
      this.props.addUploadErrors(['Please upload one file at a time.']);
    } else {
      let file = files[0];
      if (file.kind === 'file') file = file.getAsFile();

      if (file.type.slice(0, 5) !== 'video') {
        this.props.addUploadErrors(['Please choose a video file.']);
    } else {
      this.uploadFile(file);
    }
  }
}


}