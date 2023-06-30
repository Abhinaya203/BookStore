import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="container1">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="facebook.com" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="twitter.com" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="google.com" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
