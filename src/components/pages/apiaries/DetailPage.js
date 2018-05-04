import React from 'react';
import { Header, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchApiaryDetails } from '../../../actions/apiaries';

class DetailPage extends React.Component {
  state = {
    loading: false,
    error: null
  }

  componentDidMount() {
    if (Object.keys(this.props.apiary).length === 0) {
      this.fetchApiary();
    }
  }

  fetchApiary = () => {
    const { params } = this.props.match;
    
    this.setState({
      loading: true
    });

    this.props.fetchApiaryDetails(params.id).then(() => {
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

  render() {
    const { apiary } = this.props;

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
  apiary: PropTypes.object.isRequired,
  fetchApiaryDetails: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  apiary: state.apiaries.current
});

export default connect(mapStateToProps, { fetchApiaryDetails })(DetailPage);