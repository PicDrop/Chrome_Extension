import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes.js';
import { Provider } from 'react-redux';
import Store from './store';
import { setUser } from './actions.js'


ReactDOM.render(
  <Provider store={Store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('picdrop_ex')
);




//load tab data
chrome.extension.sendRequest({cmd: "load"}, function(response) {
   console.log(response)
   var data = response.user;
   data.token = response.pd_token;
   console.log(data); 

    if (response.pd_loggedIn) {  
      Store.dispatch(setUser(data));
    }

});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    if (request.url) {
      var url = request.url.srcUrl;
      console.log("url", url)
      // Store.dispatch(Actions.addUrl(url));
      console.log( parent.document )
      if ( document.getElementById("picdrop").className === "closed" ) {
        document.getElementById("picdrop").className = "";
      }
      document.getElementById("picdrop").src = "chrome-extension://nlmfjalfhbaeclmijpiamgealocldiab/iframe.html#/a/addimage"
    }

  });

// function test (data) {
//   console.log(Store)
//   Store.dispatch(function () {
//     return {
//     type: 'SET_USER',
//     user: {"name": "working"}
//   }
// })
//   console.log("get state", Store.getState())  
//   console.log("calling test FN", data)

// }










