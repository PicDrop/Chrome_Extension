import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTag } from '../../../actions';
import { bindActionCreators } from 'redux';

class Tag extends Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }
  remove() {
    console.log("clicking")
    this.props.removeTag(this.props.index)
  }
  render() {
    console.log(this)
    return (
        <span className="tag">{this.props.name}<i className="material-icons" onClick={this.remove}>clear</i></span>
    );
  }
}



//export default Tag;

function mapDispatchToState (dispatch) {
  return bindActionCreators({removeTag}, dispatch);
}

export default connect(null, mapDispatchToState)(Tag);