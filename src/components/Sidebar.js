import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

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
          <NavLink href="#">Videos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Photos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Groups</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Forums</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Websites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Blogs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/personalinfo">Personal Info</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Settings</NavLink>
        </NavItem>
        {/* More nav links */}
      </Nav>
    </div>
  );
};

export default Sidebar;
