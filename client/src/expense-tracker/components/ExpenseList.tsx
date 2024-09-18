import { Container, Table } from "react-bootstrap";
import { Expense } from "../../App";
import ExpenseForm from "./ExpenseForm";

export interface ExpenseProps {
  expenses: Expense[];
  fetchExpense: () => void;
}

const ExpenseList = ({ expenses, fetchExpense }: ExpenseProps) => {
  return (
    <>
      <Container className="d-flex justify-content-end pe-5">
        <ExpenseForm /> 
      </Container>
 
      <Container className="p-5 pt-0">
        <Table bordered className="border-light mt-2 table-dark" border={5} >
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
            <tr>
              {expenses.map((expense) => (
                <>
                  <td>{expense.id}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td className="d-flex justify-content-evenly">
                  <button className="btn btn-secondary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                  </td>

                </>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ExpenseList;
