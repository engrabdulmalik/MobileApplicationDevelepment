import ExpenseItem from "./components/ExpenseItem";
const expenses = [
  { title: "Car Insurance", amount: 6000, date: new Date(2023, 9, 13) },
  { title: "Car Navigation", amount: 8000, date: new Date(2023, 9, 12) },
  { title: "Car Seat", amount: 9000, date: new Date(2023, 9, 11) },
  { title: "Car Light", amount: 5000, date: new Date(2023, 9, 10) },
];

function App() {
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
