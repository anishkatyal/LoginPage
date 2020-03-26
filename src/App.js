import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import ReactDOM from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Registration from './components/Registration';
import Electronics from './components/Items/Electronics';
import Fashion from './components/Items/Fashion';
import Furniture from './components//Items/Furniture';
import Grocery from './components/Items/Grocery';

class App extends Component {
  render(){
  return (
<Router>
    <div>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Registration} />
    <Route path="/electronics" component = {Electronics} />
    <Route path="/fashion" component = {Fashion} />
    <Route path="/furniture" component = {Furniture} />
    <Route path="/grocery" component = {Grocery} />



    </div>
</Router>

  );
  }
}
export default App;
