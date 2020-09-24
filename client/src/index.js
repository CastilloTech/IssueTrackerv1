import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

import './style.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/' component={Landing} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
