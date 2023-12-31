import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const intial_expenses = [
  {
    id: "ed1",
    title: "Car Insurance",
    amount: 6000,
    date: new Date(2023, 9, 13),
  },
  {
    id: "ed2",
    title: "Car Navigation",
    amount: 8000,
    date: new Date(2023, 9, 12),
  },
  { id: "ed3", title: "Car Seat", amount: 9000, date: new Date(2023, 9, 11) },
  { id: "ed4", title: "Car Light", amount: 5000, date: new Date(2023, 9, 10) },
];

function App() {
  const [expenses, setExpenses] = useState(intial_expenses);
  const addExpenseData = (expensedata) => {
    setExpenses((prevExpenses) => [expensedata, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
