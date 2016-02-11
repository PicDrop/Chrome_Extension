import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentFolder } from '../../actions';


class SelectFolderModal extends Component {  
  constructor(props) {
    super(props);
    this.setSelectFolder = this.setSelectFolder.bind(this);
  }
  setSelectFolder(folder) {
    console.log("clicking folder")
    this.props.setCurrentFolder(folder)
  }
  render() {
    console.log(this.props);
    const folders = this.props.folders.map((folder, index) => {
      return <li key={index} onClick={this.setSelectFolder.bind(null, folder)}><i className="material-icons">folder</i>{folder}</li>
    });
    
    return (
      <div className="modal" style={ {display: this.props.show} } >
        <div className="content" onClick={this.props.close}>
          <header>Select A Folder</header>
          <section>
            <ul>
              {folders}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  const folders = Object.keys(state.user.folders)
  return {
    folders: folders
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( { setCurrentFolder } , dispatch );
};

export default connect(mapPropsToState, mapDispatchToProps)(SelectFolderModal);