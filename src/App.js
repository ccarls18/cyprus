import React from 'react';
import './App.css';
import Login from "./Components/login.js";
import Features from "./Components/Features.js";
import Pricing from "./Components/Pricing.js";
import NavBar from "./Components/Navbar.js"
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
        <Switch>
          <Route path="/features" component={Features}>
              <Features />
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;