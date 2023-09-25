import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const initial_expenses = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 6000,
    date: new Date(2023, 9, 13),
  },
  { id: "2", title: "Car Seat", amount: 8000, date: new Date(2023, 9, 12) },
  { id: "3", title: "Car Tyres", amount: 9000, date: new Date(2023, 9, 11) },
  { id: "4", title: "Car Lights", amount: 10000, date: new Date(2023, 9, 10) },
  { id: "5", title: "Car Lights", amount: 10000, date: new Date(2023, 9, 10) },
  { id: "6", title: "Car Lights", amount: 10000, date: new Date(2023, 9, 10) },
];
function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const receiveDataHandler = (expensesData) => {
    setExpenses((prevExpense) => [expensesData, ...prevExpense]);
  };
  return (
    <div>
      <NewExpense onReceiveData={receiveDataHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
