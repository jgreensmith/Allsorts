import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/navbar';
import Welcome from './routes/welcome';
import Footer from './components/footer';
import WelcomeSection from './routes/welcome-section';
import ParentDocuments from './routes/documents/parent-documents';
import Policies from './routes/documents/policies';
import Eyfs from './routes/documents/eyfs';
import Contact from './routes/contact';
import About from './routes/about';
import Calendar from './routes/calendar';

library.add(fab);

const App = () => (
  <Router>
    <div className="App">
        <Navbar/>
        <div className="page-container">
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/parent">
                <ParentDocuments/> 
              </Route>
              <Route path="/eyfs">
                <Eyfs/> 
              </Route>
              <Route path="/policies">
                <Policies/> 
              </Route>
              <Route path="/calendar">
                  <Calendar/>
              </Route>
              <Route path="/contact">
                  <Contact/> 
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
