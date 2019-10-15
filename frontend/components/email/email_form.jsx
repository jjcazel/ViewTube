import React from 'react';
import { acct_validation, receiveErrors, demoLogin, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const msp = state => ({
    errors: state.errors.session
})

const mdp = dispatch => ({
    action: (id) => dispatch(acct_validation(id)),
    receiveErrors: (error) => dispatch(receiveErrors(error)),
    demoLogin: () => dispatch(demoLogin()),
    clearErrors: () => dispatch(clearErrors())
})


class EmailForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {identifier: '', errors: ''}
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleEnterPress = this.handleEnterPress.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    }


    update(e){
        this.setState({identifier: e.target.value })
    }

    handleClick(e){
        e.preventDefault();
        this.props.demoLogin().then(() => this.props.history.push('/'))
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    componentDidUpdate(){
        <div className='warning'>
            {/* <FontAwesomeIcon icon={faExclamationCircle} /> */}
        </div>
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state).then(({ identifier }) => {
            if (identifier){
                this.props.history.push({
                    pathname: '/login',
                    state: this.state.identifier
                })
                debugger
            } else {
                this.props.receiveErrors('Couldn\'t find your Viewtube Account')
            }
        })
    }

    handleEnterPress(e) {
        if (e.keyCode === 13){
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    renderErrors() {
        debugger
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error'
                        key={`error-${i}`}>
                        <div className='error'>
                            {error}
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        debugger
        return (
            <div className='email-form'>
                <form className='email-form-container' onSubmit={this.handleSubmit}>
                
                    <h2 className='logo-placeholder'> <img className='logo' src={window.logoUrl} /> </h2>
                    <h2 className='other-text-email'>Sign in</h2>

                    <h3 className='other-text-email-cont'>to continue to ViewTube</h3>
                <div className='bottom-form'>
                    <label className='input-label'>
                        <input className='input-field-email' onKeyDown={this.handleEnterPress} type="text" placeholder="Email" 
                            value={this.state.identifier} onChange={this.update} />
                    </label>
                        
                        {this.renderErrors()}
                        <span className='plain-text'>Forgot email? Maybe just create another one... </span>
                        <button className='create-link-2' onClick={this.handleClick}>Or try the demo login!</button>

                    <span className='span-buttons'>
                        <Link className='create-link' to='/signup'>Create account</Link>
                        <input className='next' type="submit" value= "Next" />
                    </span>
                </div>
                </form>
            </div>
        )
    }
}

export default connect(msp, mdp)(EmailForm);