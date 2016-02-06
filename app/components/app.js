import React, {Component} from 'react';
import Actions from '../actions.js'
import { connect } from 'react-redux';
import Header from './Header/HeaderWapper';
import Content from './Content/addImage.js'


class App extends Component {
  constructor() {
    super();
    this.test = this.test.bind(this)
  }
  test() {
    console.log("change state to /AddPic");
    this.props.history.pushState(null, '/addimage');
  }
  render() {
    return (
      <div id="pd_ex">
        <Header />
        <div className="contentarea">
        {this.props.children}
        </div>
        <div id="img_placeholder">
          <img src={this.props.url}/>
        </div>
        
      </div>
    );
  }
}
  

//export default App;

function mapStateToProps (state) {
  return {
    url: state.url
  }
}

export default connect(mapStateToProps)(App);