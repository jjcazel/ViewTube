import React from 'react'
// import { Session } from 'inspector';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Login
            <input type="submit" onClick={this.handleChange} />
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