import React from 'react';
import { NavLink, } from 'react-router-dom';
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Nav, NavItem, } from 'reactstrap';

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav pills>
        <NavItem>
          <NavLink exact className='navlink' activeClassName='active' to='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='navlink' activeClassName='active' to='/infos'>Infos</NavLink>
        </NavItem>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
