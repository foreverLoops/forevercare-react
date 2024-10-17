import React from 'react';
import './LoginForm.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className='body'>
    <div className='main-div '>
      <div className='main-logo'>
        <form className='login_Contanier' action="" method='post'>
          <div>
            <h1 className='h1'>Welcome</h1>
          </div>
          <br />
          <label className='labels' htmlForfor='email'>Email</label>
          <input className='inputs' type="email" id='email' name='email' placeholder='example@gmail.com' />
          
          <br />
          <label  className='labels' for="password">Password</label>
          <input className='inputs' type="password" id="password" name="password" pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}" title="Password must be 6 to 12 characters, and include at least one letter, one number, and one special character." placeholder="********" required/>
          <br />
          <p className="ForgotPassword"><a href="/public/forgotpassword.html">Forgot Password</a></p>
          <br />
          <input className='Checkbox' type="checkbox" id="terms" name="terms" required/>
                <label className='terms' for="terms">I agree with Forever's care Terms of Service, Privacy Policy and default Notification Settings
                </label>

          <br />
          <button className='SignIn' type="submit">Sign In </button>  
          <br />
          <p className='signup'>Do not have an account? <Link to="/SignUpForm">Sign Up</Link></p>         
        </form>
      </div>
      <div className="main_logo">
            <div className="container-logo"></div>
        </div>
    </div>
    </div>
  );
};

export default LoginForm;
