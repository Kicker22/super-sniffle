import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import FirebaseLoginComponent from './FirebaseLoginComponent';
import FirebaseSignupComponent from './FirebaseSignupComponent';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Button color="danger" onClick={() => setModalOpen(true)}>Sign Up</Button>

      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Modal Title</ModalHeader>
        <ModalBody>
          <FirebaseSignupComponent></FirebaseSignupComponent>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModalOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

function ComponentInModal() {
  return <h2>Hello, I'm inside the Reactstrap modal!</h2>;
}

export default App;
