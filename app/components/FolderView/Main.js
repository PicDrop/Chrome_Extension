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
  console.log("inside map", props)
  

  let folder = state.user.folders[props.params.name];
  delete folder["id"];
  const picIDs = Object.keys(folder);
  const folderPics = picIDs.map((picID) => {
    if (picID === "id") return;
    return state.user.userPics[picID]
  })

  return {
    folderName: props.params.name,
    folderPics: folderPics
  }
}

export default connect(mapToStateProps)(FolderView);