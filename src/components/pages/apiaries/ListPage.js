import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import { fetchApiaryList } from '../../../actions/apiaries';
import ApiaryTable from '../../parts/apiaries/ApiaryTable';

class ListPage extends React.Component {
  state = {
    loading: false,
    error: null
  }

  componentDidMount() {
    if (this.props.apiaries.length === 0) {
      this.fetchApiaries();
    }
  }

  fetchApiaries = () => {
    this.setState({
      loading: true,
      error: null
    });

    this.props.fetchApiaryList().then(() => {
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
        <Header>Apiaries</Header>
        <ApiaryTable apiaries={apiaries} isLoading={this.state.loading} error={this.state.error} reload={this.fetchApiaries} />
      </div>
    );
  }
}

ListPage.propTypes = {
  apiaries: PropTypes.array.isRequired,
  fetchApiaryList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  apiaries: state.apiaries.list
});

export default connect(mapStateToProps, { fetchApiaryList })(ListPage);