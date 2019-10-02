import React from 'react';
import { Link } from 'react-router-dom'

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
                <div>
                    <Link to={'/users'}>SignUp!</Link>
                    <Link to={'/session'}>Login!</Link>
                </div >
            )
        }
    }
}

export default Greeting;