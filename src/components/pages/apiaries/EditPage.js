import React from 'react'
import ApiaryForm from '../../parts/apiaries/ApiaryForm';
import api from '../../../api';
import PropTypes from 'prop-types'

class EditPage extends React.Component {
  state = {
    apiary: null,
    loading: true,
    error: null
  }

  componentDidMount() {
    this.fetchApiary();
  }

  fetchApiary = () => {
    const { match } = this.props;

    this.setState({
      loading: true,
      error: false
    });

    api.apiaries.get(match.id).then(apiary => {
      this.setState({
        loading: false,
        apiary
      });
    }).catch(error => {
      this.setState({
        loading: false,
        error
      });
    });
  }

  onSubmit = apiary => {
    api.apiaries.update(apiary);
  }

  render() {
    return <ApiaryForm apiary={this.state.apiary} onSubmit={this.onSubmit} isLoading={this.state.loading} error={this.state.error}/>
  }
}

EditPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default EditPage;