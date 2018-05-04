import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import LoginPage from './components/pages/LoginPage';
import ApiariesListPage from './components/pages/apiaries/ListPage';
import ApiariesEditPage from './components/pages/apiaries/EditPage';

import Menu from './components/parts/Menu';

const App = () => (
  <Container>
    <Menu />
    
    <Segment attached="bottom">
      <Route exact path="/dashboard/apiaries" component={ApiariesListPage} />
      <Route exact path="/dashboard/apiaries/:id/edit" component={ApiariesEditPage} />
      <Route exact path="/login" component={LoginPage} />
    </Segment>
  </Container>
);

export default App;
