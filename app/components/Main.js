import React, { Component } from 'react';


class Main extends Component {
  render() {
    return (
      <div id="pd_ex">
        {this.props.children}
      </div>
    );
  };
}

export default Main;

