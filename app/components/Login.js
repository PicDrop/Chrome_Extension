import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import  { reduxForm } from 'redux-form';
import ROOT_URL from '../Config/rooturl';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      submission: 'login',
      subCursor: 'auto'
    };
    this.submit = this.submit.bind(this);
    this.pushToNextState = this.pushToNextState.bind(this);
    this.switchMessage = this.switchMessage.bind(this);
    this.subCursor = this.subCursor.bind(this);
  }

  submit(data) {
    console.log("posting to API");
    axios.post(`${ROOT_URL}auth/${this.state.submission}`, data)
      .then((data) => {
        this.props.setUser(data.data);
        chrome.extension.sendRequest({cmd: "save", data: {pd_loggedIn: true, user: data.data}});
        this.pushToNextState();

      }, (err) => {
        console.log(err);
      }
    );
  }

  pushToNextState() {
    const path = this.props.location.search.substr(1);
    if ( this.props.loggedIn && path.length > 1 ) {
      this.props.history.push({pathname: path});
    } else {
      this.props.history.push({ pathname: '/a' });
    }
  }

  componentDidUpdate() {
    const path = this.props.location.search.substr(1);
    if ( this.props.loggedIn && path.length > 1) {
      console.log("pushing");
      this.props.history.push({pathname: path});
    }
  }

  switchMessage() {
    const submission = this.state.submission === 'login' ? 'signup' : 'login';
    this.setState({ submission });
  }

  subCursor() {
    const subCursor = this.state.subCursor === 'auto' ? 'pointer' : 'auto';
    this.setState({ subCursor });
  }

  render() {
    const formMessage = this.state.submission === 'login' ?
      { h5: 'Not a user?', span: 'Sign Up Now' } : { h5: 'Already a user?', span: 'Sign In Now' };
    const button = this.state.submission === 'login' ? 'Login' : 'Sign Up';
    const { fields: { email, password }, handleSubmit } = this.props;
    return (
      <section className="login">
        <div>
          <img src="logo.svg" />
        </div>
        <section className="headline">
          Looks like you are not logged in. <br />
          Please login to access your account.
        </section>
        <div className="login_container">
          <form onSubmit={handleSubmit(this.submit)}>
            <div className="form_input">
              <input type="text" placeholder="Username" { ...email } />
            </div>
            <div className="form_input">
              <input type="password" placeholder="Password" { ...password }/>
            </div>
            <button type="submit">{ button }</button>
          </form>

        </div>
        <section className="sign_up">
          <h5>{ formMessage.h5 }</h5>
          <span onClick={ this.switchMessage }
            onMouseEnter={ this.subCursor }
            onMouseLeave={ this.subCursor }
            style={{ cursor: this.state.subCursor }}
          >{ formMessage.span }</span>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.isAuth
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( { setUser } , dispatch );
};

//export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, mapDispatchToProps)(Login);
