import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes.js';
import { Provider } from 'react-redux';
import Store from './store';
import { setUser, addUrl } from './actions';
const chromeID = 'nlmfjalfhbaeclmijpiamgealocldiab'

ReactDOM.render(
  <Provider store={Store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('picdrop_ex')
);




//load tab data
chrome.extension.sendRequest({cmd: 'load'}, function(response) {
  if (response.pd_loggedIn) { 
    Store.dispatch(setUser(response.user));
  }
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    if (request.url) {
      
      // Adding url to State
      Store.dispatch(addUrl(request.url));
  
      if ( document.getElementById('picdrop').className === 'closed' ) {
        document.getElementById('picdrop').className = '';
      }
      document.getElementById('picdrop').src = 'chrome-extension://' + chromeID + '/iframe.html#/a/addimage';
    }

  });











