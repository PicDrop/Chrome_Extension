import React from 'react';
import App from './components/app.js';
import { Route, IndexRoute } from 'react-router';
import AddImage from './components/Content/addImage.js'

export default (
  <Route path='/' component={App}>
    <Route path="/addimage" component={AddImage} />
  </Route>
);



// <Route path='/' component={Main}>
//     <Route path="profile/:username" component={AddImage} />
    
//     <IndexRoute component={Home} />
//   </Route>