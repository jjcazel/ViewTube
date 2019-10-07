import React from "react";
import GreetingContainer from "./greeting/greeting_container";

import SignupFormContainer from './Session/signup_form_container';
import { Route } from 'react-router-dom';
import EmailForm from '../components/email/email_form';
import PasswordForm from '../components/password/password_form';
import { AuthRoute } from '../util/route_util';
import  VideoAppContainer  from './video_index/video_app'

const App = () => (
    <div>
        
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/" component={VideoAppContainer} />
        <AuthRoute path="/signin" component={EmailForm} />
        <AuthRoute path="/login" component={PasswordForm} />
        

        <Route exact path='/' component={GreetingContainer} />
    </div>
);

export default App;