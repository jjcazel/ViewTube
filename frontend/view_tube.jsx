import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from "./components/root";
import { fetchUsers } from "./actions/users_actions";
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

JavascriptTimeAgo.locale(en)

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.dispatch = store.dispatch
  window.getState = store.getState
  window.fetchUsers = fetchUsers

});