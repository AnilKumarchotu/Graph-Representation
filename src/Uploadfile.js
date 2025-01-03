import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Uploadfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
        <Button variant="primary" onClick={handleShow}>
          Upload Document
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Modal.Title style={{ margin: '0 auto' }}>View</Modal.Title>
          <Button
            variant="close"
            onClick={handleClose}
            style={{ position: 'absolute', right: '15px', top: '15px' }}
          />
        </Modal.Header>
        <Modal.Body>
          {/* Your file upload component or content goes here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Uploadfile;
