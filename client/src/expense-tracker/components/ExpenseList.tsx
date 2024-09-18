import { Expense } from "../../App"

export interface ExpenseProps{
  expenses: Expense[];
  fetchExpense: () => void;
}

const ExpenseList = ({expenses, fetchExpense} : ExpenseProps) => {

    

  return (
    <>
    {expenses.map((expense) => 
      <li key={expense.id}>{expense.description}</li>
    )}
    </>
  )
}

export default ExpenseList