import React from 'react';
// import Home from './Home.js';
import './App.css';
import Login from './Login';
import Home from './Home.js';
import Admin from './Admin';
import Applyleave from './Applyleave';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './About';
import Add from './redux/Add';




function App() {
  return (
    <div>
    <Router>
      <Switch>
          <Route exact path="/" component={Login}/>       
                    <Route path="/home" component={Home}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/Applyleave" component={Applyleave}/> 
                    <Route path="/About" component={About}/> 
                    <Route path="/Add" component={Add}/>
        </Switch>
    </Router>
    </div>    
  );
}

export default App;
