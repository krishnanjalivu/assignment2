import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit} >
     <div className='login'>
    <img src="/src/assets/Group 3@2x.png" alt="logo" height={100} width={100}></img>
       <p>We are electric</p>
    <div></div>
      <input
        type="email"
        id="email"
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    
      <input
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
       <a href="#" >Forgot Password?</a>
      </div>
    </form>
    </div>
  );
}

export default Login;
