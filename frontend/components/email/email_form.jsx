import React from 'react';
import { acct_validation, receive_errors } from '../../util/session_api_util';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const mdp = dispatch => ({
    action: (id) => dispatch(acct_validation(id)),
    receiveErrors: (error) => dispatch(receive_errors(error))
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
                    pathname: '/',
                    state: this.state
                })
            } else {
                return dispatch(receiveErrors('Enter a valid email or phone number'))
            }
        })
    }

    render() {
        return (
            <div className='email-form-contianer'>
                <form onSubmit={this.handleSubmit}>
                    <p></p>
                    <label>
                        <input type="text" value={this.state.identifier} onChange={this.update} />
                        <input type="submit" value= "Next" />
                    </label>

                    <Link to='/signup'>Create account</Link>

                </form>
            </div>
        )
    }
}

export default connect(null, mdp)(EmailForm);