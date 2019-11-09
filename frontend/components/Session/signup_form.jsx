import React from 'react';
import { Link } from 'react-router-dom';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    };
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this)
  }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/')), 
          errors => this.props.receiveErrors(errors);
    }

    // renderErrors(){
    //   let fNameError = ''
    //   return (
    //     <ul>

    //       {this.props.errors.map((error, i) => (
            
    //         <li className='error'
    //           key={`error-${i}`}>
              
    //           <div className='error'>
    //             {/* <i class="fad fa-exclamation-circle"></i> */}
    //             <li>{error[error.length - 5]}</li> 
    //             <li>{error[error.length - 4]}</li>
    //             <li>{error[error.length - 3]}</li>
    //             <li>{error[error.length - 2]}</li>
    //             <li>{error[error.length - 1]}</li>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   )
    // }

  doesErrorExist(error) {
    const errors = this.props.errors;
    if (errors.includes(error)) {
      return error;
    }
  }

  changeToErrorForm(error) {
    if (this.doesErrorExist(error)) {
      return "-error";
    } else {
      return "";
    }
  }

  emailInputField() {
    const emailError = "Email can't be blank";
    if (this.props.formType === "SignUp") {
      return (
        <div className="email">
          <input 
            type="email"
            placeholder="Your email address"
            value={this.state.email}
            onChange={this.update('email')}
            className={'signup-input-2' + this.changeToErrorForm(emailError)}/>
              {/* /> */}
        </div>
      )
    }
  }

    

  render() {
    const invalidCredentials = "Invalid Username or Password";
    const userNameError = "Username can't be blank";
    const passwordError = "Password is too short (minimum is 6 characters)";
    // const emailError = "Email can't be blank";
    const genderError = "Gender can't be blank";
    const nameError = "Name can't be blank";
    
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
                <br/>
                {/* {this.renderErrors()} */}
                {/* {this.props.fNameError} */}
        
                <input type="text"
                    placeholder="Last name"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    className='signup-input'
                />
            </div>
            

            <label>
              <div>{this.emailInputField()}</div> 
            <div className="error">
              {/* <div>{this.doesErrorExist(emailError)}</div> */}
            </div>
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

        </form>
      </div>
    )
  }
}

export default SignUp;