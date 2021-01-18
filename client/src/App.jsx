import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import TestPage from './pages/test/TestPage';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';
import Header from './components/header/Header';
import './assets/global-style/_classes.scss';

const App = () => {
  return (
      <Router>
        <div id='app'>
          <Header />
          <div className="page--padding-double">
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/auth' component={AuthenticationPage} />
              <Route path='/test' component={TestPage} />
              <Route path='/user' component={UserPage} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;