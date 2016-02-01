import React, { Component } from 'react';
import TagInput from './AddTags/TagInput';
import TagsList from './AddTags/TagsList';
import { connect } from 'react-redux';

class ContentWrapper extends Component {
  render() {
    console.log("render")
    console.log("tags", this.props.tags)
    return (
      <section className="add_image">
        <section className="image_preview">
          <div className="image_box">
            <img src="https://d13yacurqjgara.cloudfront.net/users/452635/screenshots/2492318/6.fash_activity.png" />
          </div>
        </section>
        <section className="form_wrapper">
          <section className="category">
            <span className="title_header">FOLDER</span>
            <span className="folder_name">Iphone designs</span>
          </section>

          <section className="tags">
            <span className="title_header">TAGS</span>
            <TagInput />
            <TagsList tags={this.props.tags}/>
          </section>

          <section className="domain">
            <span className="title_header">DOMAIN</span>
            <span className="folder_name">dribbble.com</span>
          </section>

          <form>
            <div className="form_input">

            </div>
          </form>
        </section>

      </section>
    );
  };
}

function mapStateToProps (state) {
  return { tags: state.uploadImage.tags }
}

export default connect(mapStateToProps)(ContentWrapper);