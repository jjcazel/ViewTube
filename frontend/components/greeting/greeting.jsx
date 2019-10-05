import React from 'react';
import { Link } from 'react-router-dom'

// lets refactor this as the navbar!

class Greeting extends React.Component {

    handleClick(e) {

    }
    render() {
        if (this.props.currentUser) {
            return (
                <div className='navbar-container'>
                    <h2 className='signin'>{this.props.currentUser.email}</h2>
                    <button onClick={this.props.logout}>Sign out</button>
                </div>
            )
        } else {
            return (
                <div className='navbar-container'>
                    <Link className='signin'to={'/signin'}>SIGN IN</Link>
                 
                </div >
            )
        }
    }
}

export default Greeting;