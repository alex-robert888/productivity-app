import React, { useEffect } from 'react';
import { authenticateUserWithJwt } from './store/userSlice';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import TestPage from './pages/test/TestPage';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import TodayPlansPage from './pages/TodayPlansPage/TodayPlansPage';
import Header from './components/header/Header/Header';
import './assets/global-style/_classes.scss';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUserWithJwt());
  }, []);

  return (
      <Router>
        <div id='app'>
          <Header />
          <div className="page--padding">
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/auth' component={AuthenticationPage} />
              <Route path='/test' component={TestPage} />
              <Route path='/user' exact component={UserPage} />
              <Route path='/user/profile' component={UserProfilePage} />
              <Route path='/user/today' component={TodayPlansPage} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;