import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import SingleTour from './pages/SingleTour';
import Errors from './pages/Errors';


import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tours" component={Tours} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tours/:slug" component={SingleTour} />
      <Route component={Errors}  />

    </Switch>
    

    </>
  );
}

export default App;
