import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    loading: false,
    data: {
      username: '',
      password: ''
    },
    errors: []
  };

  onChange = e => { 
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  } 

  onSubmit = () => {
    this.setState({loading: true});
    this.props.submit(this.state.data).catch(error => {
      this.setState({
        loading: false,
        errors: error.response.data
      });
    });
  }

  render() {
    const { loading, data, errors } = this.state;
    const hasErrors = Object.keys(errors).length > 0;

    return (
      <div>
        { errors.non_field_errors ? <Message error header="Error" list={errors.non_field_errors} /> : null}
        <Form loading={loading} onSubmit={this.onSubmit} error={hasErrors}>
          <Form.Input required value={data.username} label="Username" name="username" onChange={this.onChange}/>
          { errors.username ? <Message error>{errors.username}</Message> : null }
          <Form.Input required value={data.password} label="Password" name="password" onChange={this.onChange} type="password" />
          { errors.password ? <Message error>{errors.password}</Message> : null }
          <Form.Button primary>Log in </Form.Button>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;