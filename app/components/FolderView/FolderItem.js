import React, { Component } from 'react';
import Tag from './Tag'
class FolderItem extends Component {
  render() {
    const tags = this.props.data.tags.map((tag, index) => {
      return <Tag name={tag} key={index} />
    }) ;
    return (
      <li className="folder_item">
        
        <div className="image_box">
          <img src={this.props.data.url} />
        </div>
          
        <section>
          <section className="domain">
            <span className="title_header">DOMAIN</span>
            <span className="sub_text">{this.props.data.domain}</span>
          </section>
          
          <section className="tags">
            <span className="title_header">TAGS</span>
            {tags}
            
          </section>
        </section>
      </li>
    );
  }
}

export default FolderItem;