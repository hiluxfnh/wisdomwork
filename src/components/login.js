import React, { useState } from 'react';
import '../styles/login.css';
import manLogin from '../images/man_login.png';
import registerIcon from '../images/register_icon.svg';
import googleLogo from '../images/google_logo.svg';
import eyeIcon from '../images/eye-disable.svg';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h1><span className="blackc">ONLINE</span> <br/>LEARNING</h1>
        <div className="illustration">
          <img src={manLogin} alt="Learning Illustration" />
        </div>
      </div>
      <div className="right-section">
        <div className="login-box">
          {isLogin ? (
            <>
              <h2>Log in</h2>
              <div className="register-container">
                <p>Never had a chance to? 
                  <span className="register-link register">
                    <a href="#" onClick={toggleForm}> Register</a>
                  </span>
                </p>
                <img src={registerIcon} alt="Register Overlay" className="register-overlay" />
              </div>
              <form>
                <div className="input-box">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email address" />
                </div>
                <div className="input-box password-container">
                  <label htmlFor="password">Password</label>
                  <div className="password-wrapper">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                    />
                    <img
                      src={eyeIcon}
                      alt="Toggle Password Visibility"
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
                <button type="submit" className="login-button">Log in</button>
              </form>
              <div className="or-divider">
                <span>Or</span>
              </div>
              <button className="google-login">
                <img src={googleLogo} alt="Google Logo" />
              </button>
            </>
          ) : (
            <>
              <h2>Sign up with us</h2>
              <div className="login-container">
                <p>Already have an account? 
                <span className="register-link register">
                    <a href="#" onClick={toggleForm}> Login</a>
                  </span>
                </p>
              </div>
              <form>
                <div className="input-box">
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" id="fullname" placeholder="Enter your full name" />
                </div>
                <div className="input-box ">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email address" />
                </div>
                <div className="input-box password-container">
                  <label htmlFor="password">Password</label>
                  <div className="password-wrapper">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      placeholder="Create your password"
                    />
                    <img
                      src={eyeIcon}
                      alt="Toggle Password Visibility"
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
                <button type="submit" className="login-button">Create Account</button>
              </form>
              <div className="or-divider">
                <span>Or</span>
              </div>
              <button className="google-login">
                <img src={googleLogo} alt="Google Logo" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
