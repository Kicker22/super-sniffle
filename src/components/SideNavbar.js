import React, { useState } from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import "../css/SideNavbar.css"

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button color="primary" onClick={() => setIsOpen(!isOpen)}>Toggle SideNavbar</Button>
      <div className={isOpen ? 'sidenav open' : 'sidenav'}>
        <Nav vertical>
        <Button color="primary" onClick={() => setIsOpen(!isOpen)}>Toggle SideNavbar</Button>

          <NavItem>
            <NavLink href="#" onClick={() => setIsOpen(false)}>Trending</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => setIsOpen(false)}>Reels</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => setIsOpen(false)}>Forums</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}

export default SideNavbar;
