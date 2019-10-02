import React from 'react'
// import { Session } from 'inspector';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            password: ''
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
        this.props.processForm(user);
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
            <div className='login-form-container'>
                {/* <h2>{this.props.formType}</h2> */}
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                   
                    <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
                    
                    <label>Email
                        <input type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='signin-input'
                         />
                    </label>
                    <br/>
                    <label> 

                    </label>

                    <Link to=""></Link>

                    <h3>{this.props.errors}</h3>

                    <Link to='/'></Link>

                </form>
            </div>
        )
    }
}

export default SessionForm;