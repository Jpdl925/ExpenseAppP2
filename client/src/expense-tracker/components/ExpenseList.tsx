import { Container, Table } from "react-bootstrap";
import { Expense } from "../../App";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant";

export interface ExpenseProps {
  expenses: Expense[];
  fetchExpense: () => void;
}

const ExpenseList = ({ expenses, fetchExpense }: ExpenseProps) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentData, setCurrentData] = useState<Expense>({} as Expense);

  const editExpense = (id:number) => {
    
    handleShow(); 
    axios
    .get(BASE_URL + "Expense/" + id)
    .then((res) => {
      setCurrentData(res.data);
      console.log(currentData);
      
      
    })
    .catch((error) => {
      console.log(error);
    })    
  }

  const deleteExpense = (id: number) => {
    axios
      .delete(BASE_URL + "Expense/" + id)
      .then(() => {
        console.log(`${id} was deleted`);
        fetchExpense();
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <>
      <Container className="d-flex justify-content-end pe-5">
        <ExpenseForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
          fetchExpense={fetchExpense}
          currentData={currentData}
          breakEdit={() => setCurrentData({} as Expense)}
        />
      </Container>

      <Container className="p-5 pt-0">
        <Table bordered className="border-light mt-2 table-dark" border={5}>
          <thead className="">
            <tr>
              <th className="text-center">ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              
                <tr key={expense.id}>
                  <td>{expense.id}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        editExpense(expense.id)
                        
                      }
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteExpense(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              
            ))}
          </tbody>
        </Table>
      </Container>


      
    </>
  );
};

export default ExpenseList;
