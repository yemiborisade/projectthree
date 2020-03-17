import React from 'react';
import NavBar from './navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PageOne from './page1'
import PageTwo from './page2'

function App() {
  return (


  <div>
    
    <Router>
    <NavBar/>
     <Switch>
      <Route path="/pageone" exact component = {PageOne} />
      <Route path="/pagetwo" exact component = {PageTwo} />
     </Switch>
    </Router>
    </div>
    
  );
}

export default App;