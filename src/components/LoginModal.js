import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from "../config/firebase";
import "firebase/auth";

import FirebaseLoginComponent from "./FirebaseLoginComponent";
const firebaseConfig = {
  // your firebase config here
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(true); // State to control modal visibility


  const toggle = () => setModal(!modal);

  
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel} </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
            <FirebaseLoginComponent></FirebaseLoginComponent>
        </ModalBody>
          
      </Modal>
    </div>
  );
};

export default LoginModal;
