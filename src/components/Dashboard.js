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
import UserTray from './UserTray'

const Dashboard = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md="2" className="sidebar mt-5">
          <UserTray className=""></UserTray>
        <Sidebar className ="" />
          {/* Sidebar content like nav links or user info can go here */}
        </Col>
      
      </Row>
    </Container>
  );
};

export default Dashboard;
