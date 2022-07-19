//import react
import React from 'react';

//import router libraly
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import NavBar from './components/NavBar/NavBar';

import { Home } from './components/Home/Home';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Reservar } from './components/Reservar/Reservar';

import {Footer} from './components/Footer/Footer';


function App() {
  return (
      <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/nosotros" exact component={() => <Nosotros />} />
          <Route path="/reservar" exact component={() => <Reservar />} />
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;