import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';


class ApiaryForm extends React.Component {
  state = {
    apiary: {
      name: '',
      latitude: '',
      longitude: '',
      address: '',
      radius: '',
      notes: ''
    },
    pristine: true
  }

  componentWillReceiveProps(props) {
    this.setState({
      apiary: Object.assign(this.state.apiary, props.apiary),
      pristine: true
    });
  }  

  onInputChange = event => {
    const { apiary } = this.state;

    this.setState({
      apiary: {
        ...apiary,
        [event.target.name]: event.target.type === 'number' ? parseFloat(event.target.value) : event.target.value
      },
      pristine: false
    });
  }

  onSubmit = () => {
    this.props.onSubmit({...this.state.apiary});
  }

  render() {
    const { apiary, pristine } = this.state;
    const { error } = this.props;
    const errorData = (error && error.response.data) || {};

    if (error && error.response.status !== 400) {
      return (
        <Message error>
          <Message.Header>Error loading</Message.Header>
          <p>{this.props.error.message}</p>
        </Message>
      )
    }

    return (
      <Form onSubmit={this.onSubmit} loading={this.props.isLoading} error={!!error}>
        <Form.Input
          label="Name"
          required
          value={apiary.name}
          name="name"
          onChange={this.onInputChange}
          error={(!pristine && !apiary.name) || !!errorData.name}/>
        <Message error content={errorData.name} />

        <Form.Input
          label="Latitude"
          value={apiary.latitude}
          name="latitude"
          onChange={this.onInputChange}
          error={!!errorData.latitude}
          type="number"
          step={0.000001}
          min={-90}
          max={90} />
        <Message error content={errorData.latitude} />

        <Form.Input
          label="Longitude"
          value={apiary.longitude}
          name="longitude"
          onChange={this.onInputChange}
          error={!!errorData.longitude}
          type="number"
          step={0.000001}
          min={-180}
          max={180} />
        <Message error content={errorData.longitude}  />

        <Form.Input
          label="Address"
          value={apiary.address}
          name="address" onChange={this.onInputChange}
          error={!!errorData.address} />
        <Message error content={errorData.address} />

        <Form.Input
          label="Radius"
          value={apiary.radius}
          name="radius" onChange={this.onInputChange}
          error={!!errorData.radius}
          type="number"
          step={0.1}
          min={0}
          max={100} />
        <Message error content={errorData.radius} />

        <Form.TextArea
          label="Notes"
          value={apiary.notes}
          name="notes" onChange={this.onInputChange}
          error={!!errorData.notes} />
        <Message error content={errorData.notes} />

        <Form.Button content="Save" />
      </Form>
    )
  }
}

ApiaryForm.propTypes = {
  apiary: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object
}

export default ApiaryForm;