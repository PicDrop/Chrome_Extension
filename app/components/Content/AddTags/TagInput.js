import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTag } from '../../../actions';
import { bindActionCreators } from 'redux';

class TagInput extends Component {
  constructor(){
    super();
    this.state = {val: ''};
    this.updateVal = this.updateVal.bind(this);
    this.addTag = this.addTag.bind(this)
  }
  addTag(event) {
    event.preventDefault();
    this.props.addTag(this.state.val);
    this.setState({val: ''});
  }
  updateVal(e){
    this.setState({
      val: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.addTag}>
        <div className="input_form">
          <input type="text" placeholder="Add a tag" value={this.state.val} onChange={this.updateVal}/>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( { addTag } , dispatch );
};

export default connect(null, mapDispatchToProps)(TagInput);
