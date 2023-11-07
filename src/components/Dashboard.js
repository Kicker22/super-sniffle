import React from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from 'reactstrap';
import Sidebar from './Sidebar';
import MainFeed from './MainFeed'

const Dashboard = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md="2" className="sidebar">
        <Sidebar/>
          {/* Sidebar content like nav links or user info can go here */}
        </Col>

        {/* Main Content */}
        <Col md="10" className="main-content">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Dashboard</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Content</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Content</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Row>
            {/* You can add more components such as feed, widgets, etc here */}

            <MainFeed></MainFeed>

          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
