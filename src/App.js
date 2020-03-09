import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import ReactDOM from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Registration from './components/Registration';

class App extends Component {
  render(){
  return (
<Router>
    <div>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Registration} />
    </div>
</Router>

  );
  }
}
export default App;
