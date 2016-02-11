import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';


class HeaderWapper extends Component {
  render() {
    console.log("this props from headerwrapper", this.props)
    return (
      <div className="top_nav">
        <Header history={this.props.history}/>
        
      </div>
    );
  };
}

export default HeaderWapper;