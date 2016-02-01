import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <section className="login">
        <div>
          <img src="logo.svg" />
        </div>
        <section className="headline">
          Looks like you are not logged in. <br />
          Please Login to access your account.
        </section>
        <div className="login_container">
          <form>
            <div className="form_input">
              <input type="text" placeholder="USERNAME" />
            </div>
            <div className="form_input">
            <input type="password" placeholder="PASSWORD" />
            </div>
            <button type="submit">Login</button>
          </form>
          
        </div>
        <section className="sign_up">
            <h5>Not a user?</h5>
            <span>Sign Up Now</span>
          </section>
      </section>
    );
  };
}

export default Login;