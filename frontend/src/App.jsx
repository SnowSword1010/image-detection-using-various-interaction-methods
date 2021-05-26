import React from 'react';

import './App.css';
import CustomNavbar from './Components/CustomNavbar.jsx';
import Footer from './Components/Footer';

import "animate.css/animate.min.css";

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import HomePage from './Components/HomePage';
import MyForm from './Components/MyForm';

function App() {

  return (
    <div>
      <div>
        <Router>
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route exact path="/form/:data" component={MyForm}/>
        </Router>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;


