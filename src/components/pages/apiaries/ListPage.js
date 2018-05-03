import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchApiaries } from '../../../actions/apiaries';
import ApiaryTable from '../../parts/ApiaryTable';

class ListPage extends React.Component {
  state = {
    loading: true
  }

  fetchApiaries = () => {
    this.setState({
      loading: true
    });

    this.props.fetchApiaries().then(() => {
      this.setState({
        loading: false
      });
    });
  }

  componentDidMount() {
    this.fetchApiaries();
  }

  render () {
    const { apiaries } = this.props;

    return (
      <div>
        <ApiaryTable apiaries={apiaries} isLoading={this.state.loading} reload={this.fetchApiaries} />
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