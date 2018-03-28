import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

import Menu from './components/parts/Menu';

const App = () => (
  <Container>
    <Menu />
    
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
  </Container>
);

export default App;
