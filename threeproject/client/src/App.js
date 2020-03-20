import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './home'
import PageTwo from './pagetwo'

const App = (props) => {
  return (

      <Router>
      <Switch>
      <Route exact path="/" component = {Home}/>
      <Route exact path="/pagetwo" component = {PageTwo}/>
      </Switch>
      </Router>  
  );
}

export default App;