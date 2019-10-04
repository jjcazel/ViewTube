import React from 'react';
import { acct_validation, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const mdp = dispatch => ({
    action: (id) => dispatch(acct_validation(id)),
    receiveErrors: (error) => dispatch(receiveErrors(error))
})


class EmailForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {identifier: ''}
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    update(e){
        this.setState({identifier: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state).then(({ identifier }) => {
            if (identifier){
                this.props.history.push({
                    pathname: '/login',
                    state: this.state.identifier
                })
            } else {
                return dispatch(receiveErrors('Enter a valid email or Username'))
            }
        })
    }

    render() {
        return (
            <div className='email-form'>
                <form className='email-form-container' onSubmit={this.handleSubmit}>
                    <br/>
                    <h2 className='logo-placeholder'> <img className='logo' src={window.logoUrl} /> </h2>
                    <h2 className='other-text-email'>Sign in</h2>

                    <h3 className='other-text-email-cont'>to continue to ViewTube</h3>

                    <label className='input-label'>
                        <input className='input-field-email' type="text" placeholder="Email" value={this.state.identifier} onChange={this.update} />
                    </label>

                    <span className='span-buttons'>
                        <Link className='create-link' to='/signup'>Create account</Link>
                        <input className='next' type="submit" value= "Next" />
                    </span>

                </form>
            </div>
        )
    }
}

export default connect(null, mdp)(EmailForm);