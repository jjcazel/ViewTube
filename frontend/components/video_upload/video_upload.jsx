import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import { withRouter } from 'react-router-dom'

class VideoUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: null,
      fileUrl: null,
      title: '',
      description: '',
      loading: false,
    }

    this.handleFile = this.handleFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeField(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  cancelUpload() {
    this.setState({
      video: null,
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
      video: file,
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

      return <div>Uploading...</div>;
    }
    this.setState({ loading: true });
    let test = new FormData();
    test.append('title', this.state.title);
    test.append('description', this.state.description);
    test.append('video', this.state.video);
    this.props.createVideo(test).then(action => {
      this.props.history.push(`/videos/${Object.keys(action.video)[0]}`)});
  }

  render() {
    return (
      <>
      <div className='nav'>
        <GreetingContainer />
      </div>
      <div className="video-upload-main">
        <div className="upload-form-details">

        <form id='upload' className="post-file-form">
          <label for='file-upload' class='custom-file-upload'>SELECT FILE</label>
          <input
            id='file-upload'
            autoComplete='false'
            type='file' 
            onChange={this.handleFile}
            className="choose-file-upload"/>
          <input type='text'
            placeholder='Title (required)'
            onChange={this.changeField('title')}
            className='upload-form-field'
            value={this.state.title}
            id='upload-form-title'>
          </input>
          <textarea type='text'
            id='upload-form-description'
            onChange={this.changeField('description')}
            className='upload-form-field'
            placeholder='Description (required)'
            value={this.state.description}
            rows='4'>
          </textarea>
        
  
          <div className="upload-buttons">
            <button className="next"
              onClick={this.submit}
              className="upload-submit">SUBMIT</button>
            <button onClick={this.cancelUpload}
              id='cancel'
              className="cancel">CANCEL</button>
          </div>
        </form>
        </div>
        
        </div>
      </>
    )
  }

}

export default withRouter(VideoUpload);
