import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="login-container">
      <h1>Food Ordering App</h1>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <button className="create-account-button">
        Create Account
      </button>
      <button className="guest-button">
        Continue as guest
      </button>
    </div>
  );
}

export default Login;
