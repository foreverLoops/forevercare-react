import React from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  return (
    <div className="main-div">
      <div className="main-logo">
        <form className="container">
          <h1>WELCOME</h1>
          <div className="log_in">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="log_in">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              pattern="(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{1,8}"
              minLength="6"
              maxLength="12"
              name="password"
              title="Password must be up to 8 characters, and include at least one letter, one number, and one special character."
              placeholder="********"
              required
            />
          </div>
          <p className="password">
            <a href="/public/forgotpassword.html">Forgot Password</a>
          </p>
          <div className="log_in">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree with Forever's care Terms of Service, Privacy Policy, and default Notification Settings
            </label>
          </div>
          <button type="submit">Sign In</button>
          <p>
            Do not have an account?
            <span>
              <a href="/public/signup.html">Sign Up</a>
            </span>
          </p>
        </form>
      </div>
      <div className="responsive-main-logo"></div>
    </div>
  );
};

export default LoginForm;
