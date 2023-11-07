import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import GoogleLogin from './GoogleLogin'

const Sidebar = () => {
  return (
    <div className="sidebar-sticky bg-light">
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Messages</NavLink>
        </NavItem>
        <NavItem>
          <GoogleLogin></GoogleLogin>
        </NavItem>
        {/* More nav links */}
      </Nav>
    </div>
  );
};

export default Sidebar;
