import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import  LoginFormContainer  from './Session/login_form_container';
import SignupFormContainer from './Session/signup_form_container';
import { Route } from 'react-router-dom';
import EmailForm from '../components/email/email_form';
import PasswordForm from '../components/password/password_form';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            {/* <h2>ViewTube</h2>
            <h1>Sign in</h1>
            <h3>to continue to ViewTube</h3> */}
            
        </header>

        {/* <Route path="/" component={LoginFormContainer} /> */}
        
        <Route path="/signup" component={SignupFormContainer} />
        {/* <Route path="/api/videos/:id" component={Video} /> */}
        <AuthRoute path="/signin" component={EmailForm} />
        <AuthRoute path="/login" component={PasswordForm} />
        

        <Route exact path='/' component={GreetingContainer} />
    </div>
);

export default App;