import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Home from './Pages/home'
import PageTwo from './Pages/pagetwo'
import PageThree from './Pages/pagethree';

const App = (props) => {
  return (

      <Router>
      <Switch>
      <Route exact path="/" component = {Home}/>
      <Route exact path="/pagetwo" component = {PageTwo}/>
      <Route exact path="/pagethree" component = {PageThree}/>
      </Switch>
      </Router>  
  );
}

export default App;
