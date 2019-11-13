import React from 'react';
import { withRouter } from 'react-router'
import { faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.logout = this.logout.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: !this.state.displayMenu })
  }

  hideDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: false })
  }
  logout(e){
    e.stopPropagation();
      this.props.logout().then(() => this.props.history.push('/'))
  }

  render() {
    return (
        
      <div>
        <div className='signin-cont' onClick={this.showDropdownMenu} > 
          
          <div className="signin">{this.props.currentUser.email}</div> 
        
        {this.state.displayMenu ? (
          <ul className='dropdown'>
            <div className="drop-top">
              <li className="drop-name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</li>
              <li className="drop-email">{this.props.currentUser.email}</li>
            </div>
              <li className="signout"><a className="linked" target="_blank" href="https://www.linkedin.com/in/jared-cazel-ab84a695/" onClick='https://www.linkedin.com/in/jared-cazel-ab84a695/'>Jared's LinkedIn</a><FontAwesomeIcon
                icon={faLinkedinIn} /></li>
              <li className="signout"><a className="git" target="_blank" href="https://github.com/jjcazel" onClick='https://github.com/jjcazel' >Jared's GitHub</a></li> 
              <li className="signout"><a className="git" target="_blank" href="https://jaredcazel.com" onClick='https://jaredcazel.com'>Jared's Site</a></li> 
              <li className="signout" onClick={this.logout}>Sign out</li>
          </ul>
        ) :
            (
              null
            )
        }
        </div>
      </div>
    );    
  }
}

export default withRouter(Dropdown);