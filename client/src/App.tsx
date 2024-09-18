import React, { useEffect, useState } from 'react'
import ExpenseList from './expense-tracker/components/ExpenseList'
import axios from 'axios'
import { BASE_URL } from './constant'
import 'bootstrap/dist/css/bootstrap.min.css';


export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}


const App = () => {

  const [data, setData] = useState<Expense[]>([])
  const [error, setError] = useState("");

  const fetchData = () => {
    axios
    .get(BASE_URL + "Expense")
    .then((res) =>{
      setData(res.data);
    })
    .catch((error) => {
      setError(error);
    })
  }

  useEffect(() => {
    fetchData();

  }, [])
  

  return (
    <>
    <ExpenseList expenses={data} fetchExpense={fetchData}/>
    </>
  )
}

export default App