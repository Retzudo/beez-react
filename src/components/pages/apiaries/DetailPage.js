import React from 'react';
import { Header, Dimmer, Loader, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchApiaryList } from '../../../actions/apiaries';

class DetailPage extends React.Component {
  state = {
    loading: false,
    error: null,
    didFetch: false
  }

  componentDidMount() {
    if (this.props.apiaries.length === 0 && !this.state.didFetch) {
      this.setState({
        loading: true
      });
      this.props.fetchApiaryList().then(() => {
        this.setState({
          loading: false,
          didFetch: true
        });
      });
    }
  }

  render() {
    const { apiaries } = this.props;
    const apiary = apiaries.find(apiary => apiary.id === parseInt(this.props.match.params.id, 10));

    if (this.state.didFetch && !apiary) {
      return <Message error>
        404
      </Message>
    }

    return (
      <div>
        {this.state.loading ? <Dimmer><Loader /></Dimmer> : null }
        <Header>{apiary.name}</Header>
      </div>
    );
  }
}

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  apiaries: PropTypes.array.isRequired,
  fetchApiaryList: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { fetchApiaryList })(DetailPage);