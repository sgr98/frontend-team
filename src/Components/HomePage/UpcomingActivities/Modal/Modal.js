import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function MyVerticallyCenteredModal({
  onEmailSubmit,
  title,
  description,
  ...props
}) {
  const [email, setEmail] = useState('');
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{description}</h4>
        <p>Enter your College Email address to join this Activity</p>
        <Form>
          {' '}
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (email) {
              onEmailSubmit(email);
            }
          }}
        >
          Submit
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalFunction({ postRequestUrl, title, description, buttonTitle }) {
  const [modalShow, setModalShow] = useState(false);

  const onEmailSubmit = async (email) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    try {
      //   await axios.post(postRequestUrl, email, config);
      console.log(postRequestUrl);
      alert('Successfully Submitted');
    } catch (err) {
      alert('Something went wrong try again');
    }
  };
  return (
    <>
      <Button
        id="UpcomingActivities-swipe-btn"
        variant="outline"
        onClick={() => setModalShow(true)}
      >
        {buttonTitle}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onEmailSubmit={onEmailSubmit}
        onHide={() => setModalShow(false)}
        title={title}
        description={description}
      />
    </>
  );
}

export default ModalFunction;
