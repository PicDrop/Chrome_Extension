import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="title">
        <h4>Upload Image</h4>
        </div>
        
        <div className="nav_button">
          <i className="material-icons">cloud_upload</i><h4> SAVE IMAGE</h4>
        </div>
      </nav>
    );
  }
}

export default Nav;