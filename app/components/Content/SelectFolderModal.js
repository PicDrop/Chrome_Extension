import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentFolder, addFolder } from '../../actions';


class SelectFolderModal extends Component {  
  constructor(props) {
    super(props);
    this.setSelectFolder = this.setSelectFolder.bind(this);
    this.updateInputVal = this.updateInputVal.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.showInput = this.showInput.bind(this);
    this.state = { showInput: false, value: '' };
  }
  setSelectFolder(folder) {
    this.props.setCurrentFolder(folder);
    this.props.close();
  }
  showInput(){
    this.setState({
      showInput: !this.state.showInput
    });
  }
  updateInputVal(e) {
    this.setState({
      value: e.target.value
    });
  }
  submitHandler(event) {
    event.preventDefault();
    const value = this.state.value;
    this.setState({value: '', showInput: false});
    this.props.close();
    this.props.setCurrentFolder(value);
    this.props.addFolder(value);
  }
  render() {
    console.log(this.state.showInput);
    const displayInput = () => {
      if (this.state.showInput) {
        return (
          <form onSubmit={this.submitHandler}>
            <div className="input_form"> 
              <input type="text" placeholder="Folder Name" value={this.state.value} onChange={this.updateInputVal} />
            </div>
          </form>
        );
      };
       
    }
    const folders = this.props.folders.map((folder, index) => {
      return <li key={index} onClick={this.setSelectFolder.bind(null, folder)}><i className="material-icons">folder</i>{folder}</li>
    });
    
    return (
      <div className="modal" style={ {display: this.props.show} } >
        <div className="content">
          <header>
            <span>Select A Folder</span>
            <i className="material-icons" onClick={this.showInput}>add</i>
          </header>
          <section>
            { displayInput() }
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
  const folders = Object.keys(state.user.folders);
  return {
    folders: folders
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( { setCurrentFolder, addFolder } , dispatch );
};

export default connect(mapPropsToState, mapDispatchToProps)(SelectFolderModal);