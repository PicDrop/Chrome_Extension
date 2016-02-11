import React, { Component } from 'react';
import { connect } from 'react-redux';
import FolderItem from './FolderItem';
import Nav from './Nav';

class FolderView extends Component {
  
  render() {
    console.log("pic data", this.props);

    const itemList = this.props.folderPics.map((item, index) => {
      return <FolderItem key={index} data={item} />;
    })


    return (
      <section className="height_100">
        <Nav folder={this.props.folderName}/>
        <div className="folder_view">
          {itemList}
        </div>
      </section>
    );
  }
}

const mapToStateProps = (state, props) => {
  const folder = state.user.folders[props.params.name];
  const picIDs = Object.keys(folder);
  const folderPics = picIDs.map((picID) => {
    return state.user.userPics[picID]
  })

  return {
    folderName: props.params.name,
    folderPics: folderPics
  }
}

export default connect(mapToStateProps)(FolderView);