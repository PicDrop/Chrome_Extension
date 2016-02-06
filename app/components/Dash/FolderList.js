import React, { Component } from 'react';
import Folder from './Folder'
import { connect } from 'react-redux';

class FolderList extends Component {
  render() {
    const keys = Object.keys(this.props.folders);
    const Folders = keys.map((folder, index) => {
       const num = Object.keys(this.props.folders[folder]).length;
      return <Folder key={index} folderName={folder} folderNumber={num} history={this.props.history}/>
    }); 
    return (
      <section className="folders">
        {Folders}
      </section>
    );
  }
}

// export default FolderList;

const mapPropsToState = (state) => {
  console.log("state from folders", state)
  return {
    folders: state.user.folders
  }
}

export default connect(mapPropsToState)(FolderList);