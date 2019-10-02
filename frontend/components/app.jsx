import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import  LoginFormContainer  from './Session/login_form_container';
import SignupFormContainer from './Session/signup_form_container';
import { Route } from 'react-router-dom';
import EmailForm from '../components/email/email_form'


const App = () => (
    <div>
        <header>
            {/* <h2>ViewTube</h2>
            <h1>Sign in</h1>
            <h3>to continue to ViewTube</h3> */}
            
        </header>

        {/* <Route path="/" component={LoginFormContainer} /> */}
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/signin" component={EmailForm} />

        <Route exact path='/' component={GreetingContainer} />
    </div>
);

export default App;