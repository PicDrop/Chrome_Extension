import React, { Component } from 'react';

class Folder extends Component {
  constructor(){
    super();
    this.selectFolder = this.selectFolder.bind(this)
  }
  selectFolder() {
    console.log("folder Clicked")
    console.log(this.props.history)
    this.props.history.push('/a/folder/' + this.props.folderName)
  }
  render() {
    return (
      <div className="folder" onClick={this.selectFolder}>
        <span className="name">{this.props.folderName}</span>
        <span className="number">{this.props.folderNumber}</span>
      </div>
    );
  }
}

export default Folder;