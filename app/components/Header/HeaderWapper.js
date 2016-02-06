import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';


class HeaderWapper extends Component {
  render() {
    return (
      <div className="top_nav">
        <Header />
        
      </div>
    );
  };
}

export default HeaderWapper;