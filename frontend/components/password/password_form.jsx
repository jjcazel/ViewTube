import React from 'react';
import { login, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// do I need to map state to props here to get current user or can I use the greeeting container?

const mdp = dispatch => ({
    action: (user) => dispatch(login(user)),
    receiveErrors: (error) => dispatch(receiveErrors(error))
})


class PasswordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: this.props.location.state, password: '' }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    update(e) {
        this.setState({ password: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(({ user}) => {
            if (user) {
                this.props.history.push({
                    pathname: '/',
                    state: this.state
                })
            } else {
                return dispatch(receiveErrors('Password is invalid. You changed your password today!'))
            }
        })
    }

    render() {
        // debugger
        return (
            <div >
                <form className='email-form-container' onSubmit={this.handleSubmit}>
                    <p className='logo-signin'>ViewTube</p>
                    <h2 className='other-text'>Welcome
                    <br/> {this.props.location.state}</h2>
                    <br/>
                    <label className='input-label'>Password
                        <input className='input-field' type="password" value={this.state.password} onChange={this.update} />
                        <input className='next' type="submit" value="Next"  />
                    </label>
                    <br/>
                    <div className='create-link'>
                        <Link to='/signup'>Create account</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, mdp)(PasswordForm);