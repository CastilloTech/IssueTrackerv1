import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='container'>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' />
      <br />
      <label htmlFor='password'>Password</label>
      <input type='text' id='password' />
      <br />
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' />
      <br />
      <Link to="/"><button type='button' id='back'>
        Back
      </button></Link>
      <Link to="/Home"><button id='signup2' type='submit'>
        Sign-Up
      </button></Link>
    </div>
  );
}

export default Signup;
