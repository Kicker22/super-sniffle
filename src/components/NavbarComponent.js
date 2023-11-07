import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import firebase from '../config/firebase'; // ensure firebase is configured

const NavigationBar = () => {
  const [user, setUser] = useState(null);
  
  // Set up a listener on mount and remove on unmount
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      alert('Logged out successfully');
    } catch (error) {
      console.error('Logout Error', error);
    }
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">MyApp</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/discover">Discover</NavLink>
        </NavItem>

        {user ? (
          <>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/settings">Settings</NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={handleLogout}>Logout</Button>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
