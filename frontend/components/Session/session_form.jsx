import React from 'react'
// import { Session } from 'inspector';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
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
            <div className='signup-form-container'>
                {/* <h2>{this.props.formType}</h2> */}
                <form onSubmit={this.handleSubmit} className='signup-form-box'>
                   
                    {/* <input type="text" value={this.state.username} onChange={this.update('username')} /> */}
                    
                    <label>First name
                        <input type="text" 
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            className='signup-input'
                         />
                    </label>
                    
                    <label>Last name
                        <input type="text" 
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            className='signup-input'
                         />
                    </label>

                    <label>Your email address
                        <input type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='signup-input'
                         />
                    </label>

                    <label>Password
                        <input type="password" 
                            value={this.state.password}
                            onChange={this.update('password')}
                            className='signup-input'
                         />
                    </label>

                    <br/>
                    <input type="submit" value='Next' />

                    {/* <Link to=""></Link> */}

                    <h3>{this.props.errors}</h3>

                    {/* <Link to='/'></Link> */}

                </form>
            </div>
        )
    }
}

export default SessionForm;