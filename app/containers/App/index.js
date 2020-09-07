/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Nav from 'components/Nav';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
