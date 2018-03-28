import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuPart = () => (
  <Menu secondary>
    <Menu.Menu position="right">
      <Menu.Item name="login">
        <Link to="login/">Log in</Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuPart