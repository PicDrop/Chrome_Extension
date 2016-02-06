import React from 'react';
import App from './components/app.js';
import { browserHistory, Router, Route, Link } from 'react-router';
import Main from './components/Main';
import AddImage from './components/Content/addImage.js'
import Login from './components/Login';
import { isAuth } from './Auth';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='login' component={Login}></Route>
      <Route path="a" component={App} onEnter={requireAuth}>
        <Route path="addimage" component={AddImage}></Route>
      </Route>
        

    </Route>
  </Router>
);




function requireAuth(nextState, replace) {
    // If user is not logged in redirect to login
    if (!isAuth()) {
      replace('/', 'login')
    }
}

// chrome.extension.sendRequest({cmd: "load"}, function(response) {
//   console.log("response", response, response.pd_loggedIn)
// });

