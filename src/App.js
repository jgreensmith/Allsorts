import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/navbar';
import Welcome from './routes/welcome';
import Footer from './components/footer';
import WelcomeSection from './routes/welcome-section';
import Documents from './routes/documents';

library.add(fab);

const App = () => (
  <Router>
    <div className="App">
        <Navbar/>
        <div className="page-container">
            <Switch>
              <Route path="/about">
                <h2>About Us</h2>
              </Route>
              <Route path="/documents">
                <Documents/> 
              </Route>
              <Route path="/calendar">
                  <h1>Calendar</h1> 
              </Route>
              <Route path="/community-links">
                  <h1>Dope Links</h1> 
              </Route>
              <Route path="/contact">
                  <h1>Giz a ring</h1> 
              </Route>
              <Route path="/">
                <Welcome/>
                <WelcomeSection/>
              </Route>

            </Switch>
        </div>
          
        <Footer/>
    </div>
  </Router>
);
export default App;
