import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from '../../actions/auth';
import UserMenuDropdown from './UserMenuDropdown';

const MenuPart = ({ user, logOut }) => (
  <Menu attached="top">
    <Menu.Menu>
      <Menu.Item header as={Link} to="/">
        <Image src="/images/logo.svg" avatar spaced="right" />
        Beez
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item name="login">
        { !user.token
            ? <Link to="/login">Log in</Link>
            : <UserMenuDropdown username={user.username} logOut={logOut} />
        }
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

MenuPart.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { logOut })(MenuPart);