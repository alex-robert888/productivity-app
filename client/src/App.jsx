import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import AuthenticationPage from './pages/AuthenticationPage';
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      <div id='app'>
        <Header />
        <Switch>
          <Route path='/auth' component={AuthenticationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;