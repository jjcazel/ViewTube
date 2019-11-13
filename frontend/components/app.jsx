import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {VideoIndexContainer, VideoSearchIndexContainer } from './video_index/video_index_container'
import SignupFormContainer from './Session/signup_form_container';
import { Route } from 'react-router-dom';
import EmailForm from '../components/email/email_form';
import PasswordForm from '../components/password/password_form';
import { AuthRoute } from '../util/route_util';
import  VideoShowContainer  from './video_show/video_show_container';
import VideoUploadForm from './video_upload/video_upload_container';

const App = () => (
    <div>
        
        <Route exact path='/' component={GreetingContainer} />
        <Route exact path='/' component={VideoIndexContainer} />
        <Route exact path='/search' component={GreetingContainer} />
        <Route exact path='/search' component={VideoSearchIndexContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/videos/:videoId" component={VideoShowContainer} />
        <AuthRoute path="/signin" component={EmailForm} />
        <AuthRoute path="/login" component={PasswordForm} />
        <Route path="/upload" component={VideoUploadForm} />
        
    </div>
);

export default App;