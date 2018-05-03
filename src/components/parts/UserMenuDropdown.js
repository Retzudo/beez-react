import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const UserMenuDropdown = ({ username, logOut }) => (
  <Dropdown text={<span><Icon name="user circle" /> {username}</span>} simple>
    <Dropdown.Menu>
      <Dropdown.Item icon="dashboard" text="Dashboard" as={Link} to="/" />
      <Dropdown.Item icon="user" text="Profile" as={Link} to="/profile" />
      <Dropdown.Divider />
      <Dropdown.Item icon="sign out" text="Log out" onClick={logOut} />
    </Dropdown.Menu>
  </Dropdown>
)

UserMenuDropdown.propTypes = {
  username: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired
};

export default UserMenuDropdown;