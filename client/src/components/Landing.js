import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="container">
      <h1 id="landhead">IssueTracker</h1>
      <Link to="/Home"><button id="guest">Guest</button></Link>

      <div id="progress">
      <Link to="/Signup"><button type="button" id="signup">Signup</button></Link>
      <Link to="/Login"><button type="button" id="login">Login</button></Link>
      </div>
    </div>
  );
}

export default Landing;