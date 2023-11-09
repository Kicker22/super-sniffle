import './App.css';
import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import NavbarComponent from './components/NavbarComponent';
import FirebaseLoginComponent from './components/FirebaseLoginComponent';
import Dashboard from './components/Dashboard';
import PersonalInfo from './components/PersonalInfo';
// import SignupModal from './components/SignupModal'





function App() {
  return (
      <Router>
          <NavbarComponent />
        <Routes>
          {/* <Route path="/signup" element={<SignupModal></SignupModal>} /> */}
          <Route path="/login" element={<FirebaseLoginComponent/>} />
        </Routes>
        <Dashboard></Dashboard>
      </Router>
  );
}

export default App;