import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Expense } from "../../App";
import axios from "axios";
import { BASE_URL } from "../../constant";

interface ExpenseFormProps {
  fetchExpense: () => void;
  currentData?: Expense;
  breakEdit: () => void;
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}

const ExpenseForm = ({
  fetchExpense,
  currentData,
  breakEdit,
  show,
  handleClose,
  handleShow
}: ExpenseFormProps) => {

  const [curData, setCurData] = useState<Expense>();
  
  const [expense, setExpense] = useState({
    id: currentData?.id || 0,
    description: currentData?.description || "",
    amount: currentData?.amount || 0,
    category: currentData?.category || "",
  });


  const addExpense = () => {
    axios
      .post(BASE_URL + "Expense", expense)
      .then(() => {
        handleClose();
        fetchExpense();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(expense);
    setExpense({} as Expense)
  };





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
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                id="description"
                type="text"
                className="form-control"
                value={currentData ? expense.description : ""}
                onChange={(e) =>
                  setExpense({ ...expense, description: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                id="amount"
                type="text"
                className="form-control"
                value={expense.amount}
                onChange={(e) =>
                  setExpense({ ...expense, amount: parseInt(e.target.value) })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                id="category"
                className="form-control"
                value={expense.category}
                onChange={(e) =>
                  setExpense({ ...expense, category: e.target.value })
                }
              >
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
          <Button variant="primary" onClick={addExpense}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExpenseForm;
