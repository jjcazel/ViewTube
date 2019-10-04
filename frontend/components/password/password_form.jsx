import React from 'react';
import { login, receiveErrors, receiveUserEmail } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// do I need to map state to props here to get current user or can I use the greeeting container?

const msp = state => {
    const email = state.userEmail.email;

    return { email }
}

const mdp = dispatch => ({
    receiveUserEmail: (email) => dispatch(receiveUserEmail(email)),
    action: (user) => dispatch(login(user)),
    receiveErrors: (error) => dispatch(receiveErrors(error))
})


class PasswordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: this.props.location.state, password: '' }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.receiveUserEmail(this.state.email)
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
    
        return (
            <div className='email-form'>
                <form className='email-form-container' onSubmit={this.handleSubmit}>

                    <p className='logo'><img className='logo' src={window.logoUrl} /></p>
                    <h2 className='other-text-email'>Welcome</h2>
                    <br/>
                    <div className='other-text-email-2-container'>
                        <div className='other-text-email-2'>{this.props.email}</div>
                    </div>
                    <label className='input-label'>
                        <input className='input-field-email' type="password" placeholder="Password" value={this.state.password} onChange={this.update} />
                    </label>
                    <br/>

                    <span className='span-buttons'>
                        <div className='plain-text'>Forgot Password?</div>
                        <input className='create-link' type="submit" value="Try the demo login" />
                        <input className='next' type="submit" value="Next"  />
                    </span>
                </form>
            </div>
        )
    }
}

export default connect(msp, mdp)(PasswordForm);