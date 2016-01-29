import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes.js';
import { Provider } from 'react-redux';
import Store from './store';
import Actions from './actions.js'


ReactDOM.render(
  <Provider store={Store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('picdrop_ex')
);


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
  
//     if (request.url) {
//       var url = request.url.srcUrl;
//       Store.dispatch(Actions.addUrl(url));
//     }

//   });











//       $.ajax({
//         url: 'https://localhost:4000/api/user/drop',
//         type: "POST",
//         data: {"test": url}
//       }).done(function (data) {
//           console.log(data);
//       });
    
