import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container'>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' />
      <br />
      <label htmlFor='password'>Password</label>
      <input type='text' id='password' />
      <br />
      <Link to='/'>
        <button type='button' id='back'>
          Back
        </button>
      </Link>
      <Link to="/Home"><button id='login' type='submit'>
        Login
      </button></Link>
    </div>
  );
}

export default Login;