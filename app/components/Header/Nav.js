import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import ROOT_URL from '../../Config/rooturl';
import { addImageToState, clearAddImageState } from '../../actions';


class Nav extends Component {
  

  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage() {
    axios.defaults.headers.common['Authorization'] = "Bearer " + this.props.user.token;
    console.log("sending - ", this.props.imageInfo)
    axios.post(ROOT_URL + 'user/createDrop', this.props.imageInfo)
      .then((res) => {
        console.log('success', res);
        this.props.addImageToState(this.props.imageInfo);
        this.props.history.push({ pathname: '/a' });
        this.props.clearAddImageState();
      });
  }

  render() {
    console.log("props from NAV", this.context)
    return (
      <nav className="top_nav">
        <div className="title">
        <h4>Upload Image</h4>
        </div>
        
        <div className="nav_button" onClick={this.uploadImage}>
          <i className="material-icons">cloud_upload</i><h4> SAVE IMAGE</h4>
        </div>
      </nav>
    );
  }
}


function mapPropsToState (state) {
  let imageDataObj = state.uploadImage;
  imageDataObj.folder = state.app.currentFolder;

  return {
    user: state.user,
    imageInfo: state.uploadImage,
  };
}

function mapDispatchToState (dispatch) {
  return bindActionCreators({addImageToState, clearAddImageState}, dispatch)
}

// export default Nav;

export default connect(mapPropsToState,mapDispatchToState)(Nav);