import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const expenses = [
  { title: "Car Insurance", amount: 6000, date: new Date(2023, 9, 13) },
  { title: "Car Navigation", amount: 8000, date: new Date(2023, 9, 12) },
  { title: "Car Seat", amount: 9000, date: new Date(2023, 9, 11) },
  { title: "Car Light", amount: 5000, date: new Date(2023, 9, 10) },
];

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
