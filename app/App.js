import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes.js';
import { Provider } from 'react-redux';
import Store from './store';
import { setUser, addUrl } from './actions';

ReactDOM.render(
  <Provider store={Store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('picdrop_ex')
);

// load tab data and setUser
chrome.extension.sendRequest({cmd: 'load'}, function(response) {
  if (response.pd_loggedIn) {
    Store.dispatch(setUser(response.user));
  }
});

// Listening for Content messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.setImage) {
      // Adding image data to State for Addimage View
      Store.dispatch(addUrl(request.setImage));
    }
});
