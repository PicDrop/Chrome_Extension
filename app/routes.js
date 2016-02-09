import React from 'react';
import App from './components/app.js';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';
import Main from './components/Main';
import AddImage from './components/Content/addImage.js'
import Login from './components/Login';
import { isAuth } from './Auth';
import Dashboard from './components/Dash/Main';
import FolderView from './components/FolderView/Main';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='login' component={Login}></Route>
      <Route path="a" component={App} onEnter={requireAuth}>
        <IndexRoute component={Dashboard}/>
        <Route path="folder/:name" component={FolderView}></Route>
        <Route path="addimage" component={AddImage}></Route>
      </Route>
    </Route>
  </Router>
);




function requireAuth(nextState, replace) {
  // If user is not logged in redirect to login
  if ( !isAuth() ) {
    replace('/', 'login?' + nextState.location.pathname);
  }
}

// chrome.extension.sendRequest({cmd: "load"}, function(response) {
//   console.log("response", response, response.pd_loggedIn)
// });

