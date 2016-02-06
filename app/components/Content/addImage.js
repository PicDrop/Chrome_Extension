import React, { Component } from 'react';
import TagInput from './AddTags/TagInput';
import TagsList from './AddTags/TagsList';
import Nav from '../Header/Nav';
import { connect } from 'react-redux';
import { updateNotes } from '../../actions';
import { bindActionCreators } from 'redux';


class ContentWrapper extends Component {
  constructor(props) {
    super(props);
    this.updateNoteVal = this.updateNoteVal.bind(this);
  }
  updateNoteVal(e) {
    this.props.updateNotes(e.target.value);
  }
  render() {
    
    return (
      <div className="height_100"> 
        <Nav history={this.props.history}/>
        <section className="add_image">
          <section className="image_preview">
            <div className="image_box">
              <img src={this.props.url} />
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
              <span className="folder_name">{this.props.domain}</span>
            </section>

            <section className="notes"> 
              <span className="title_header">NOTES</span>
              <div className="input_form">
                <textarea 
                  value={this.props.note}
                  onChange={this.updateNoteVal}
                  placeholder="Add Some Notes..."></textarea>
              </div>
            </section>

            <form>
              
            </form>
          </section>
        </section>
      </div>
    );
  };
}

function mapStateToProps (state) {
  return { 
    tags: state.uploadImage.tags,
    url: state.uploadImage.url,
    domain: state.uploadImage.domain,
    note: state.uploadImage.note
  };
}

function mapDispatchToState (dispatch) {
  return bindActionCreators({ updateNotes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToState)(ContentWrapper);