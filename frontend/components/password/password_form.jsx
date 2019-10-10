import React from 'react';
import { login, receiveErrors, receiveUserEmail, demoLogin, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const msp = state => ({
    email: state.userEmail.email,
    errors: state.errors.session

})

const mdp = dispatch => ({
    receiveUserEmail: (email) => dispatch(receiveUserEmail(email)),
    action: (user) => dispatch(login(user)),
    receiveErrors: (error) => dispatch(receiveErrors(error)),
    demoLogin: () => dispatch(demoLogin()),
    clearErrors: () => dispatch(clearErrors())
})

class PasswordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: this.props.location.state, password: '', errors: '' }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
        if (!this.state.email){
            this.props.history.push('/signin')
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.demoLogin().then(() => this.props.history.push('/'))
    }


    update(e) {
        this.setState({ password: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(({ user }) => {
            if (user) {
                this.props.history.push({
                    pathname: '/',
                    state: this.state
                })
            } else if (status === 404) {
                this.props.receiveErrors('Password is invalid. You changed your password today!')
            }
        })
    }

    handleEnterPress(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
    
        return (
            <div className='email-form'>
                <form className='email-form-container' onSubmit={this.handleSubmit}>

                    <p className='logo'><img className='logo' src={window.logoUrl} /></p>
                        <h2 className='other-text-email'>Welcome</h2>
                    <br/>

                    <div className='other-text-email-2-container'>
                        <div className='other-text-email-2'>{this.state.email}</div>
                    </div>

                    <label className='input-label'>
                        <input className='input-field-email' onKeyDown={this.handleEnterPress} type="password" placeholder="Password" value={this.state.password} onChange={this.update} />
                    </label>

                    {this.renderErrors()}
                    <br/>

                    <span className='span-buttons'>
                        <div className='plain-text'>Forgot Password?</div>
                            <button className='create-link-2' onClick={this.handleClick}>Try the demo login!</button>
                        <input className='next' type="submit" value="Next"  />
                    </span>
                </form>
            </div>
        )
    }
}

export default connect(msp, mdp)(PasswordForm);