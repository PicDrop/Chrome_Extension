import React, { Component } from 'react';
import SelectFolderModal from './SelectFolderModal';
class SelectFolder extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.folderShowName = this.folderShowName.bind(this)
    this.state = {modalStyle:'none', color: '#ED1E79'};
  }
  closeModal() {
    this.setState({modalStyle: 'none'});
  }
  openModal() {
    this.setState({modalStyle: 'block'});
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.folder && this.state.color == '#ED1E79') {
      this.setState({
        color: '#777777'
      });
    }
  }
  folderShowName() {
    if ( this.props.folder !== '' ) {
      return this.props.folder;
    }
    return 'Select A Folder';
  }
  render() {
    return (
      <div>
        <div className="select_folder_wrapper">
          <div>
          <span className="folder_name">{this.folderShowName()}</span>
          <i className="material-icons" style={ {color: this.state.color} } onClick={this.openModal}>folder</i></div>
        </div>
        <SelectFolderModal show={this.state.modalStyle} close={this.closeModal}/>
      </div>
    );
  }
}

export default SelectFolder;