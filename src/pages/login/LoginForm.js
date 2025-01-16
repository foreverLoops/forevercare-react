import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file
import {supabase} from "../../supabaseClient";


const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
      } else {
        console.log("User signed in:", data.user.id);
        // Redirect the user to the home page
        navigate("/home");

      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };


  return (
    <div className='body'>
    <div className='main-div '>
      <div className='main-logo'>
        <form className='login_Contanier' action="" method='post'>
          <div>
            <h1 className='h1'>Welcome</h1>
          </div>
          <br />
          <label className='labels' htmlFor='email'>Email</label>
          <input className='inputs' type="email" id='email' name='email' placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <br />
          <label  className='labels' htmlFor="password">Password</label>
          <input className='inputs' type="password" id="password" name="password" pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}" title="Password must be 6 to 12 characters, and include at least one letter, one number, and one special character." value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" required/>
          <br />
          <p className="ForgotPassword"><Link to="/forgotpassword">Forgot Password</Link></p>
          <br />
          <div className='Terms_Login'> 
          <div className='terms_checkbox'>
          <input className='Checkbox' type="checkbox" id="terms" name="terms" required/>
                <label className='terms' htmlFor="terms">I agree with Forever's care Terms of Service, Privacy Policy and default Notification Settings
                </label>
           </div>
          </div>

          <br />
          <button className='SignIn' onClick={handleSubmit} type="submit">Sign In </button>  
          <br />
          <p className='signup'>Do not have an account?<Link to="/SignUpForm">Sign Up</Link></p>         
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
