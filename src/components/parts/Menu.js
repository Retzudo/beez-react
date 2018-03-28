import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from '../../actions/auth';

const MenuPart = ({ user, logOut }) => (
  <Menu secondary>
    <Menu.Menu position="right">
      <Menu.Item name="login">
        { !user.token
            ? <Link to="/login">Log in</Link>
            : <a onClick={logOut} style={{cursor: 'pointer'}}>Log out</a>
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