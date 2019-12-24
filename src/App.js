import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginUi from './Login/ui'
import FamesUi from './Fames/ui'
import DetailUi from './Detail/ui'

function App() {
  return (
    <Router>
      <Route path="/" exact strict component={LoginUi} />
      <Route path="/fames" exact strict component={FamesUi} />
      <Route path="/detail" exact strict component={DetailUi} />
    </Router>
  );
}

export default App;
