import React from 'react';
import { Link } from 'react-router-dom'

// lets refactor this as the navbar!

class Greeting extends React.Component {

    handleClick(e) {

    }
    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <h2>Welcome, {this.props.currentUser.email}</h2>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className='navbar-container'>
                    <Link to={'/signin'}>SIGN IN</Link>
                 
                </div >
            )
        }
    }
}

export default Greeting;