import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/home'
import PageTwo from './Pages/pagetwo'

const App = (props) => {
  return (

      <Router>
      <Switch>
      <Route exact path="/home" component = {Home}/>
      <Route exact path="/pagetwo" component = {PageTwo}/>
      </Switch>
      </Router>  
  );
}

export default App;
