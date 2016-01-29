import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="flex-1">
          <i className="material-icons">menu</i>
        </div>
        <div className="flex text-center">
          <img src='logo.svg' />
        </div>
        <div className="flex-1">
          <i className="material-icons">clear</i>
        </div>

      </header>
    );
  };
}

export default Header;