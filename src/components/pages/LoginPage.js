import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { logIn } from '../../actions/auth';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
  onSubmit = data => {
    return this.props.logIn(data).then(() => {
      this.props.history.push("/");
    })
  }

  render() {
    return (
      <LoginForm submit={this.onSubmit} />
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  logIn: PropTypes.func.isRequired
}

export default withRouter(connect(null, { logIn })(LoginPage));