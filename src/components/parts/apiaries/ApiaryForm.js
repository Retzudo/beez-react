import React from 'react'
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types'


class ApiaryForm extends React.Component {
  state = {

  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Input label="Name" required />
      </Form>
    )
  }
}

ApiaryForm.propTypes = {
  apiary: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default ApiaryForm;