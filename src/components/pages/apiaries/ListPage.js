import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApiaries } from '../../../actions/apiaries';

class ListPage extends React.Component {
  componentDidMount() {
    this.props.fetchApiaries();
  }

  render () {
    const { apiaries } = this.props;

    return (
      <ul>
        { apiaries.map(apiary => <li key={apiary.id}>{apiary.name}</li>)}
      </ul>
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