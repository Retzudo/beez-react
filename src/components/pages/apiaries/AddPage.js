import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

import ApiaryForm from '../../parts/apiaries/ApiaryForm';
import { addApiary } from '../../../actions/apiaries';

class AddPage extends React.Component {
  state = {
    loading: false,
    error: null
  }

  onSubmit = apiary => {
    this.setState({
      loading: true
    });

    this.props.addApiary(apiary).then(() => {
      this.props.history.push('/dashboard/apiaries');
    }).catch(error => {
      this.setState({
        loading: false,
        error
      });
    });
  }

  render() {
    return (
      <ApiaryForm onSubmit={this.onSubmit} isLoading={this.state.loading} error={this.state.error} />
    )
  }
}

AddPage.propTypes = {
  addApiary: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default withRouter(connect(null, { addApiary })(AddPage));