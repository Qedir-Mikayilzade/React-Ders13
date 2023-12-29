// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import WorkSamples from './components/WorkSamples';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/work-samples" component={WorkSamples} />
          <Route path="/contact" component={ContactInfo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
