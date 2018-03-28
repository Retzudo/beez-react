import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ApiariesListPage from './components/pages/apiaries/ListPage';

import Menu from './components/parts/Menu';

const App = () => (
  <Container>
    <Menu />
    
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/apiaries" component={ApiariesListPage} />
  </Container>
);

export default App;
