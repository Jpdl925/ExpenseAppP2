import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ExpenseForm = () => {

    const addExpense = () => {

    }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mt-5" variant="primary" onClick={handleShow}>
        Add Expense
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-dark" closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-dark">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Amount</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option>Select a Category</option>
                <option>Groceries</option>
                <option>Utilities</option>
                <option>Entertainment</option>
                <option>Food</option>
                <option>Shopping</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExpenseForm;
