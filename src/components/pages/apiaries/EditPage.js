import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import { updateApiary, fetchApiaryList } from '../../../actions/apiaries';
import ApiaryForm from '../../parts/apiaries/ApiaryForm';

class EditPage extends React.Component {
  state = {
    loading: false,
    error: null,
    success: null,
    didFetch: false
  }

  componentDidMount() {
    if (this.props.apiaries.length === 0 && !this.state.didFetch) {
      this.setState({
        loading: true
      });

      this.props.fetchApiaryList().then(() => {
        this.setState({
          didFetch: false,
          loading: false
        });
      });
    }
  }

  onSubmit = apiary => {
    this.setState({
      loading: true,
      error: null
    });

    this.props.updateApiary(apiary).then(() => {
      this.setState({
        loading: false,
        success: true
      });
    }).catch(error => {
      this.setState({
        loading: false,
        error
      });
    });
  }

  render() {
    const { apiaries } = this.props;
    const apiary = apiaries.find(apiary => apiary.id === parseInt(this.props.match.params.id, 10));

    if (this.state.didFetch && !apiary) {
      return <Message error>
        404
      </Message>
    }

    return <ApiaryForm
      apiary={apiary}
      onSubmit={this.onSubmit}
      isLoading={this.state.loading}
      error={this.state.error}
      success={this.state.success} />
  }
}

EditPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  apiaries: PropTypes.array.isRequired,
  updateApiary: PropTypes.func.isRequired,
  fetchApiaryList: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { updateApiary, fetchApiaryList })(EditPage);