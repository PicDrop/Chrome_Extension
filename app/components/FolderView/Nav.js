import React, { Component } from 'react';

class Nav extends Component {

render() {
    console.log("props from NAV", this.context)
    return (
      <nav className="top_nav">
        <div className="title">
        <h4>{this.props.folder}</h4>
        </div>
        
      </nav>
    );
  }
}

export default Nav;