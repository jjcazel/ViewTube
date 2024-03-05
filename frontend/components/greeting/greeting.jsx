import React from "react";
import { Link } from "react-router-dom";
import DropdownContainer from "./dropdown_container";
import createHistory from "history/createHashHistory";
import SidebarContainer from "../Sidebar/sidebar_container";
import SideBarModalContainer from "../Sidebar/sidebar_modal_container";

require("history").createHashHistory;

// lets refactor this as the navbar!

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: this.props.search ? this.props.search : "" };
    this.search = this.search.bind(this);
    this.deactivateSpaceToPlay = this.deactivateSpaceToPlay.bind(this);
    this.reactivateSpaceToPlay = this.reactivateSpaceToPlay.bind(this);
  }

  deactivateSpaceToPlay() {
    this.props.spaceToPlay(false);
  }

  reactivateSpaceToPlay() {
    this.props.spaceToPlay(true);
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      this.props.updateSearchField(e.target.value);
    };
  }

  search(e) {
    e.preventDefault();
    this.props.fetchVideos(this.state);
    createHistory().push("/search");
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          {/* <SidebarContainer/> */}
          <div className="navbar-container">
            <section className="nav-left">
              <div className="icon-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                >
                  <path fill="white" d="M4 8h22v2H4zm0 7h22v2H4zm0 7h22v2H4z" />
                </svg>
              </div>
              <div className="logo-play-container">
                <img className="play-button" src={window.playIconUrl} />
                <Link to="/" className="viewtube-index">
                  ViewTube
                </Link>
              </div>
            </section>

            <div className="search-container">
              <form className="search-container" onSubmit={this.search}>
                <input
                  className="search"
                  type="text"
                  placeholder="Search"
                  onChange={this.updateField("search")}
                  onFocus={this.deactivateSpaceToPlay}
                  onBlur={this.reactivateSpaceToPlay}
                  value={this.state.search}
                ></input>
                <button className="button-search">
                  <button className="button-search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="1"
                    >
                      <circle cx="10" cy="10" r="7"></circle>
                      <line x1="14" y1="14" x2="20" y2="20"></line>
                    </svg>
                  </button>
                </button>
              </form>
            </div>

            <section className="nav-right">
              <div id="title-right">
                <Link to="/upload">
                  <div className="highlight-circle">
                    <img className="upload-right" src={window.uploadUrl} />
                  </div>
                </Link>
              </div>

              <section>
                <DropdownContainer />
              </section>
            </section>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-container">
          <section className="nav-left">
            <div className="icon-button">
              <img className="hamburger" src={window.hamburgerUrl} />
            </div>

            <div className="logo-play-container">
              <Link to="/" className="viewtube-index">
                <img className="play-button" src={window.playIconUrl} />
                ViewTube
              </Link>
            </div>
          </section>

          <div className="search-container">
            <form className="search-container" onSubmit={this.search}>
              <input
                className="search"
                type="search"
                placeholder="Search"
                onChange={this.updateField("search")}
                onFocus={this.deactivateSpaceToPlay}
                onBlur={this.reactivateSpaceToPlay}
                value={this.state.search}
              ></input>
              <button className="button-search">
                <img id="mag-glass" src={window.magGlass}></img>
                <img id="mag-glass-darker" src={window.magGlassDarker}></img>
              </button>
            </form>
          </div>

          <section className="nav-right">
            <Link to="/signin">
              <div className="highlight-circle">
                <img className="upload-right" src={window.uploadUrl} />
              </div>
            </Link>

            <Link className="signin" to="/signin">
              SIGN IN
            </Link>
          </section>
        </div>
      );
    }
  }
}

export default Greeting;
