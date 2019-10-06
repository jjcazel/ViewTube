import React from 'react'
import { Link } from 'react-router-dom'

// import { Session } from 'inspector';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/'));
        // this.props.action(this.state)
    }

    renderErrors(){
        return (
            <ul>
                {"error placeholder"}
            </ul>
        )
    }

    render() {
        return (
            <div className='signup-form'>
                {/* <h2>{this.props.formType}</h2> */}
                <form onSubmit={this.handleSubmit} className='signup-form-box'>
                   
                    {/* <input type="text" value={this.state.username} onChange={this.update('username')} /> */}
                    <h2 className='logo-placeholder-2'> <img className='logo-2' src={window.logoUrl} /> </h2>
                    <h2 className='heading-text'>Create your ViewTube Account</h2>

                    <h3 className='heading-text-cont'>to continue to ViewTube</h3>

                    <div className='name-container'>
                        
                        <input type="text"
                            placeholder="First name"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className='fname-input'
                        />
                
                        <input type="text"
                            placeholder="Last name"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className='signup-input'
                        />
                    </div>
                    

                    <label>
                        <input type="text" 
                            placeholder="Your email address"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='signup-input-2'
                         />
                    </label>
                    <br/>

                    <label>
                        <input type="password" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className='signup-input-2'
                         />
                    </label>

                    <span className='plain-text-2'>Use 6 or more characters with a mix of letters, numbers & symbols </span>
                
                    <span className='span-buttons'>
                        <Link className='create-link' to='/signin'>Sign in instead</Link>
                        <input className='next' type="submit" value='Next' />

                    </span>

                    {/* <Link to=""></Link> */}

                    <h3>{this.props.errors}</h3>

                    {/* <Link to='/'></Link> */}

                </form>
            </div>
        )
    }
}

export default SessionForm;