import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setViewAndFolder } from '../../actions';

class Folder extends Component {
  constructor(){
    super();
    this.selectFolder = this.selectFolder.bind(this)
  }
  selectFolder() {
    this.props.setViewAndFolder('folder', this.props.folderName)
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

const mapDistpatToState = (dispatch) => {
  return bindActionCreators( { setViewAndFolder }, dispatch);
};

export default connect(null, mapDistpatToState)(Folder);