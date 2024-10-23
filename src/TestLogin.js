import React, { useState } from 'react';
import { supabase } from './supabaseClient.js';

const TestLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Optionally, redirect the user or show a success message
      console.log('Login successful');
      // Redirect logic here (e.g., using React Router)
    }
  };

  return (
    <div className='Main_Login'>
      <div className='Body_Login'>
        <div className="Login">
          <div className="Header">Login</div>
          {error && <p className="error">{error}</p>}
          <form className="LoginForm" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className='Submit_Login' type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TestLogin;
