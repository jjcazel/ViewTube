import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { withRouter } from "react-router-dom";
import SidebarContainer from "../Sidebar/sidebar_container";

class VideoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      fileUrl: null,
      title: "",
      description: "",
      loading: false,
    };

    this.handleFile = this.handleFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeField(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  cancelUpload() {
    this.setState({
      video: null,
      title: "",
      description: "",
    });
  }

  handleFile(e) {
    this.addFileToState(e.target.files);
  }

  addFileToState(files) {
    if (files.length > 1) {
      this.props.addUploadErrors(["Please upload one file at a time."]);
    } else {
      let file = files[0];
      if (file.kind === "file") file = file.getAsFile();

      if (file.type.slice(0, 5) !== "video") {
        this.props.addUploadErrors(["Please choose a video file."]);
      } else {
        this.uploadFile(file);
      }
    }
  }

  uploadFile(file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      this.setState({
        video: file,
        fileUrl: fileReader.result,
        title: file.name,
      });
    };

    fileReader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  }

  submit(e) {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.video === null ||
      this.state.loading
    ) {
      return <div>Uploading...</div>;
    }
    this.setState({ loading: true });
    let uploadValues = new FormData();
    uploadValues.append("title", this.state.title);
    uploadValues.append("description", this.state.description);
    uploadValues.append("video", this.state.video);
    this.props.createVideo(uploadValues).then((action) => {
      this.props.history.push(`/videos/${Object.keys(action.video)[0]}`);
    }).catch(error => console.error(`There was an error: ${error}`));
  }

  render() {
    return (
      <>
        <div className="nav">
          <GreetingContainer />
        </div>
        <div className="video-upload-main">
          <div className="side-bar-whole-2">
            <SidebarContainer />
          </div>
          <div className="other-div">
            <div className="upload-form-details">
              <form id="upload" className="post-file-form">
                <label htmlFor="file-upload" className="custom-file-upload">
                  SELECT FILE
                </label>
                <input
                  id="file-upload"
                  autoComplete="false"
                  type="file"
                  onChange={this.handleFile}
                  className="choose-file-upload"
                />
                <input
                  type="text"
                  placeholder="Title (required)"
                  onChange={this.changeField("title")}
                  className="upload-form-field"
                  value={this.state.title}
                  id="upload-form-title"
                ></input>

                <textarea
                  type="text"
                  id="upload-form-description"
                  onChange={this.changeField("description")}
                  className="upload-form-field"
                  placeholder="Description (required)"
                  value={this.state.description}
                  rows="4"
                ></textarea>
                {this.state.loading && <div>Uploading...</div>}
                <div className="upload-buttons">
                  <button onClick={this.submit} className="upload-submit">
                    SUBMIT
                  </button>
                  <button
                    onClick={this.cancelUpload}
                    id="cancel"
                    className="cancel"
                  >
                    CANCEL
                  </button>
                  <div className="upload-errors">
                    {this.props.uploadErrors}
                    {this.props.otherErrors}
                    {this.submit}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(VideoUpload);
