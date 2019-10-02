import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import  LoginFormContainer  from './Session/login_form_container';
import SignupFormContainer from './Session/signup_form_container';
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            {/* <h2>ViewTube</h2>
            <h1>Sign in</h1>
            <h3>to continue to ViewTube</h3> */}
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;