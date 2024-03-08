import React from "react";
import { Link } from "react-router-dom";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/")),
      (errors) => this.props.receiveErrors(errors);
  }

  renderErrors() {
    let fNameError = "";
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            <div className="error-signup">
              <ul>
                <div className="error-list">
                  {/* <FontAwesomeIcon
                    icon={faExclamationCircle}/> */}
                  <li className="err-message">{error[error.length - 5]}</li>
                </div>
                <div className="error-list">
                  {/* <FontAwesomeIcon
                    icon={faExclamationCircle}/> */}
                  <li className="err-message">{error[error.length - 4]}</li>
                </div>
                <div className="error-list">
                  {/* <FontAwesomeIcon
                    icon={faExclamationCircle}/> */}
                  <li className="err-message">{error[error.length - 3]}</li>
                </div>
                <div className="error-list">
                  {/* <FontAwesomeIcon
                    icon={faExclamationCircle}/> */}
                  <li className="err-message">{error[error.length - 2]}</li>
                </div>
                <div className="error-list">
                  {/* <FontAwesomeIcon
                    icon={faExclamationCircle}/> */}
                  <li className="err-message">{error[error.length - 1]}</li>
                </div>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h2 className="logo-placeholder-2">
            {" "}
            <img className="logo-2" src={window.logoUrl} />{" "}
          </h2>
          <h2 className="heading-text">Create your ViewTube Account</h2>

          <h3 className="heading-text-cont">to continue to ViewTube</h3>

          <div className="name-container">
            <input
              type="text"
              placeholder="First name"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="fname-input"
            />

            <input
              type="text"
              placeholder="Last name"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="signup-input"
            />
          </div>

          <label>
            <input
              type="text"
              placeholder="Your email address"
              value={this.state.email}
              onChange={this.update("email")}
              className="signup-input-2"
            />
          </label>
          <br />

          <label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
              className="signup-input-2"
            />
          </label>
          {this.renderErrors()}

          <span className="plain-text-2">
            Use 6 or more characters with a mix of letters, numbers & symbols{" "}
          </span>

          <span className="span-buttons">
            <Link className="create-link" to="/signin">
              Sign in instead
            </Link>
            <input className="next" type="submit" value="Next" />
          </span>
        </form>
      </div>
    );
  }
}

export default SignUp;
