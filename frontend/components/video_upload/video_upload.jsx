import React from 'react';
// import { Link } from 'react-router-dom';

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

  uploadFile(file) {
    const fileReader = new FileReader();
    this.setState({
      file: file,
      fileUrl: fileReader.result,
      title: file.name,
    });
  }

  submit(e) {
    e.preventDefault();

    if (this.state.title === '' ||
      this.state.description === '' ||
      this.state.file === null ||
      this.state.loading) {

      return;
    }

    this.setState({ loading: true });
    this.props.createVideo(this.state);
  }

  render() {
    return (
      <div>
        <h2>Upload Your Video Here!</h2>
        <form id='upload'>
          <input
            autoComplete='false'
            name='hidden'
            type='text'
            style={{ display: 'none' }} />
          <input type='text'
            onChange={this.changeField('title')}
            className='upload-form-field'
            value={this.state.title}
            id='upload-form-title'>
          </input>
          <textarea type='text'
            id='upload-form-description'
            onChange={this.changeField('description')}
            className='upload-form-field'
            placeholder='Description'
            value={this.state.description}
            rows='4'>
          </textarea>
          <div>
            <button onClick={this.cancelUpload}
              id='cancel'
              className={cancelButtonClass}>CANCEL</button>
          </div>
        </form>
      </div>
    )
  }

}

export default VideoUpload;
