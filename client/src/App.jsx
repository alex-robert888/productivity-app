import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import TestPage from './pages/test/TestPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      <div id='app'>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/auth' component={AuthenticationPage} />
          <Route path='/test' component={TestPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;