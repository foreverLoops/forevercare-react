import React from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  return (
    <div className='main-div '>
      <div className='main-logo'>
        <form className='container' action="" method='post'>
          <div>
            <h1>Welcome</h1>
          </div>
          <br />
          <label htmlForfor='email'>Email</label>
          <input type="email" id='email' name='email' placeholder='example@gmail.com' />
          
          <br />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}" title="Password must be 6 to 12 characters, and include at least one letter, one number, and one special character." placeholder="********" required/>
          <br />
          <p class="password"><a href="/public/forgotpassword.html">Forgot Password</a></p>
          <br />
          <input type="checkbox" id="terms" name="terms" required/>
                <label for="terms">I agree with Forever's care Terms of Service, Privacy Policy and default Notification Settings
                </label>

          <br />
          <button type="submit">Sign In </button>  
          <br />
          <p>Do not have an account? <a href="/public/signup.html">Sign Up</a></p>         
        </form>
      </div>
      <div className="main-logo" id="main-logo">
            <div className="container-logo"></div>
        </div>
    </div>
  );
};

export default LoginForm;
