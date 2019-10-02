import React from 'react';
import { Link } from 'react-router-dom'

// lets refactor this as the navbar!

class Greeting extends React.Component {

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <h2>Welcome, {this.props.currentUser}</h2>
                    <Link to={`/session`}>Logout</Link>
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