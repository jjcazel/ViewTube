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
            <div className='email-form'>
                <form className='email-form-container' onSubmit={this.handleSubmit}>

                    <p className='logo'><img className='logo' src={window.logoUrl} /></p>
                    <h2 className='other-text-email'>Welcome
                    <br/> {this.props.location.state}</h2>
                    <br/>
                    <label className='input-label'>
                        <input className='input-field-email' type="password" placeholder="Password" value={this.state.password} onChange={this.update} />
                    </label>
                    <br/>

                    <span className='span-buttons'>
                        <Link className='create-link' to='/signup'>Create account</Link>
                        <input className='next' type="submit" value="Next"  />
                    </span>
                </form>
            </div>
        )
    }
}

export default connect(null, mdp)(PasswordForm);