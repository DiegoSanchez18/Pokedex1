import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/Layout/NAVBAR.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Layout/Dashboard';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemondx from './Components/Pokemons/Pokemondx';
import Rroute from "./Route.js";

import backgroundImage from './pokebola.png';


class App extends Component {
  
  render() {
    return (
      <Router>
    <div className="App" style={{background: `url(${backgroundImage})`}}>
        <NavBar /> 
        <div className="Container"> 
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Rroute />
          </Switch>
        </div>
    </div>
    </Router>
      );
    } 
}

export default App;
