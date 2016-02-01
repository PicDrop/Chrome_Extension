import React from 'react';
import App from './components/app.js';
import { browserHistory, Router, Route, Link } from 'react-router';
import Main from './components/Main';
import AddImage from './components/Content/addImage.js'
import Login from './components/Login';


export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='login' component={Login}></Route>
      <Route path="a" component={App}>
        <Route path="addimage" component={AddImage}></Route>
      </Route>
        

    </Route>
  </Router>
);


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

// <Route path='/' component={Main}>
//     <Route path="profile/:username" component={AddImage} />
    
//     <IndexRoute component={Home} />
//   </Route>