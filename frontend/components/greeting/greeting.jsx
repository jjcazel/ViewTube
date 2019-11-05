import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from './dropdown_container';

// lets refactor this as the navbar!

class Greeting extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          results: []
      }
  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
      this.props.fetchVideos().then(() => {
          this.setState({results: this.props.videos })
      });
  }

  handleChange(e) {
      // Variable to hold the original version of the list
      let currentList = [];
      // Variable to hold the filtered list before putting into state
      let newList = [];

      // If the search bar isn't empty
      if (e.target.value !== "") {
          // Assign the original list to currentList
          currentList = this.props.videos;

          // Use .filter() to determine which items should be displayed
          // based on the search terms
          newList = currentList.filter(video => {
              // change current item to lowercase
              const lc = video.toLowerCase();
              // change search term to lowercase
              const filter = e.target.value.toLowerCase();
              // check to see if the current list item includes the search term
              // If it does, it will be added to newList. Using lowercase eliminates
              // issues with capitalization in search terms and search content
              return lc.includes(filter);
          });
      } else {
          // If the search bar is empty, set newList to original task list
          newList = this.props.videos;
      }
      // Set the filtered state based on what our rules added to newList
      this.setState({
          filtered: newList
      });
  }
   

  render() {
    if (this.props.currentUser) {  
      return (
        <div className='navbar-container'>
        
          <div className='icon-button'>
            <img className="hamburger" src={window.hamburgerUrl} />
          </div>

          <div className='logo-play-container'>
            <Link to='/' className='viewtube-index'>
                <img className="play-button" src={window.playIconUrl} />ViewTube
              </Link>
          </div>
          
          <div className="search-container">
            <input className='search' onChange={this.handleChange} type="search" placeholder='Search' q='googlesearch'/>
          </div>
  
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
  
      </div>
      )         
    } else {
      return (
        <div className='navbar-container'>
          <div className='icon-button'>
            <img className="hamburger" src={window.hamburgerUrl} />
          </div>

          <div className='logo-play-container'>
            <Link to='/' className='viewtube-index'>
              <img className="play-button" src={window.playIconUrl} />ViewTube
            </Link>
          </div>
          <div className="search-container">
            <input className='search' onChange={this.handleChange} type="search" placeholder='Search' q='googlesearch' />
          </div>
          
            <Link to='/signin'>
              <div className='highlight-circle'>
                <img className='upload-right' src={window.uploadUrl} />
              </div>
            </Link>
         

          <Link className='signin' to='/signin'>SIGN IN</Link>

        </div >
      )
    }         
  }
}

export default Greeting;