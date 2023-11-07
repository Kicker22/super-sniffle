import './App.css';
import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import NavbarComponent from './components/NavbarComponent';
import SignUp from './components/SignUp';
import NonAuthDiscoverPage from './components/NonAuthDiscoverPage';
import StemplotHomepage from "./components/StemplotHomepage"
import FirebaseLoginComponent from './components/FirebaseLoginComponent';
import UserInfo from "./components/UserInfo"
import Dashboard from './components/Dashboard';





function App() {
  return (
      <Router>
          <NavbarComponent />
        <Routes>
          <Route path="/home" exact element={<StemplotHomepage></StemplotHomepage>} />
          <Route path="/discover" element={<NonAuthDiscoverPage></NonAuthDiscoverPage>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<FirebaseLoginComponent/>} />
          <Route path="/info" element={<UserInfo></UserInfo>} />
        </Routes>
        <Dashboard></Dashboard>
      </Router>
  );
}

export default App;