import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import LoginPage from './components/pages/LoginPage';
import ApiariesListPage from './components/pages/apiaries/ListPage';
import ApiariesEditPage from './components/pages/apiaries/EditPage';
import ApiariesDetailPage from './components/pages/apiaries/DetailPage';
import ApiariesAddPage from './components/pages/apiaries/AddPage';

import Menu from './components/parts/Menu';
import HomePage from './components/pages/HomePage';

const App = () => (
  <Container>
    <Menu />
    
    <Segment attached="bottom">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard/apiaries" component={ApiariesListPage} />
        <Route exact path="/dashboard/apiaries/add" component={ApiariesAddPage} />
        <Route exact path="/dashboard/apiaries/:id" component={ApiariesDetailPage} />
        <Route exact path="/dashboard/apiaries/:id/edit" component={ApiariesEditPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Segment>
  </Container>
);

export default App;
