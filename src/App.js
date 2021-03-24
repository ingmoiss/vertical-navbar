import React from 'react';
import { Navbar } from './components/navbar.jsx';
import { BrowserRouter as Router, Switch} from 'react-router-dom';

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        </Switch>
      </Router>
    </>
  );
}

