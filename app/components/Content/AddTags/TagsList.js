import React, { Component } from 'react';
import Tag from './Tag';


class TagsList extends Component {

  render() {
    console.log(this.props.tags);
    
    const Tags = this.props.tags.map((tag, index) => {
      return <Tag name={tag} key={index} index={index} />;
    });
    
    return (
      <div className="show_tags">
       { Tags }
      </div>
    );
  }
}

export default TagsList;
