import './App.css';
import StemplotHomepage from './components/StemplotHomepage';
import SignupModal from "./components/SignUpModal"
import DiscoverPage from './components/DiscoverPage';
import LoginMdoal from './components/LoginModal'
import NavbarComponent from './components/NavbarComponent';
import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Modal,ModalHeader,ModalBody, ModalFooter} from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: true, // Set the default view to the home page
    };
  }

  // Function to switch to the home page view
  goToHomePage = () => {
    this.setState({ isHomePage: true });
  }

  // Function to switch to the discover page view
  goToDiscoverPage = () => {
    this.setState({ isHomePage: false });
  }

  

  render() {
    const { isHomePage } = this.state;

    return (
      <div className='bg-light'>
        <NavbarComponent></NavbarComponent>
        {/* Navigation to switch between views */}
        <Navbar color="dark" light expand="md">
          <Container  className='text-center mb-5 mt-5'>
          <h1 style={{color: 'white'}}>Welcome to the new social</h1>
           <Button color="link"onClick={this.goToHomePage}>Home</Button>
           <Button color="link" onClick={this.goToDiscoverPage}>Discover</Button>
            <SignupModal></SignupModal>
            <LoginMdoal></LoginMdoal>
          </Container>
        </Navbar>
      

        {/* Conditional rendering based on the selected view */}
        {isHomePage ? (
          <StemplotHomepage />
          
        ) : (
          <DiscoverPage />
        )}
      </div>
    );
  }
}

export default App;