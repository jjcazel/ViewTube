import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from './dropdown_container';
import createHistory from 'history/createHashHistory';
require("history").createHashHistory;

// lets refactor this as the navbar!

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
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
    return e => {
      this.setState({ [field]: e.target.value });
      this.props.updateSearchField(e.target.value);
    };
  }

  search(e) {
    // debugger
    e.preventDefault()
    this.props.fetchVideos(this.state);
    createHistory().push('/');
  }
   

render() {
  if (this.props.currentUser) {  
    return (
      <div className='navbar-container'>
        <section className='nav-left'>
          <div className='icon-button'>
            <img className="hamburger" src={window.hamburgerUrl} />
          </div>

          <div className='logo-play-container'>
            <Link to='/' className='viewtube-index'>
                <img className="play-button" src={window.playIconUrl} />ViewTube
              </Link>
        </div>
        </section>

        <div className="search-container">
          <form className="search-container" onSubmit={this.search}>
            <input className='search' 
              type="text"
              placeholder='Search'
              onChange={this.updateField('search')}
              onFocus={this.deactivateSpaceToPlay}
              onBlur={this.reactivateSpaceToPlay}
              value={this.state.search}>
            </input>
            <button className='button-search'>
              <img id='mag-glass' src={window.magGlass}></img>
              <img id='mag-glass-darker' src={window.magGlassDarker}></img>
            </button>        
          </form>
        </div>

        <section className='nav-right'>
          <div id='title-right'>
              <Link to='/upload'>
                  <div className='highlight-circle'>
                      <img className='upload-right' src={window.uploadUrl} />
                  </div>
              </Link>
          </div>
              
          <section >
              <DropdownContainer />
          </section>    
        </section>
    </div>
    )         
  } else {
    return (
      <div className='navbar-container'>
        <section className='nav-left'>
          <div className='icon-button'>
            <img className="hamburger" src={window.hamburgerUrl} />
          </div>

          <div className='logo-play-container'>
            <Link to='/' className='viewtube-index'>
              <img className="play-button" src={window.playIconUrl} />ViewTube
            </Link>
          </div>
        </section>

        <div className="search-container">
          <form className="search-container" onSubmit={this.search}>
            <input className='search'
              type="search"
              placeholder='Search'
              onChange={this.updateField('search')}
              onFocus={this.deactivateSpaceToPlay}
              onBlur={this.reactivateSpaceToPlay}
              value={this.state.search}>
            </input>
            <button className='button-search'>
              <img id='mag-glass' src={window.magGlass}></img>
              <img id='mag-glass-darker' src={window.magGlassDarker}></img>
            </button>
          </form>
        </div>

        <section className='nav-right'>
          <Link to='/signin'>
            <div className='highlight-circle'>
              <img className='upload-right' src={window.uploadUrl} />
            </div>
          </Link>
        
          <Link className='signin' to='/signin'>SIGN IN</Link>
        </section>

        </div >
      )
    }         
  }
}

export default Greeting;