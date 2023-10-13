import React from 'react';
import firebase from '../config/firebase';
import SignUpModal from './SignUpModal'

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button
} from 'reactstrap';

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLogged: !!firebase.auth().currentUser,
    };
  }

  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(() => {
      this.setState({ isLogged: true });
    });
  };

  handleLogout = () => {
    firebase.auth().signOut().then(() => {
      this.setState({ isLogged: false });
    });
  };

  render() {
    const { isOpen, isLogged } = this.state;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StemSocial</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile/">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/discover/">Discover</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              {isLogged ? (
                <Button color="danger" onClick={this.handleLogout}>Logout</Button>
              ) : (
                <Button color="primary" onClick={this.handleLogin}>Login with Google</Button>
              )}
            </NavItem>
            <SignUpModal></SignUpModal>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
