import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchApiaries } from '../../../actions/apiaries';
import ApiaryTable from '../../parts/apiaries/ApiaryTable';

class ListPage extends React.Component {
  state = {
    loading: true,
    error: null
  }

  componentDidMount() {
    this.fetchApiaries();
  }

  fetchApiaries = () => {
    this.setState({
      loading: true,
      error: null
    });

    this.props.fetchApiaries().then(() => {
      this.setState({
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false,
        error
      });
    });
  }

  render () {
    const { apiaries } = this.props;

    return (
      <div>
        <ApiaryTable apiaries={apiaries} isLoading={this.state.loading} error={this.state.error} reload={this.fetchApiaries} />
      </div>
    );
  }
}

ListPage.propTypes = {
  apiaries: PropTypes.array.isRequired,
  fetchApiaries: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { fetchApiaries })(ListPage);