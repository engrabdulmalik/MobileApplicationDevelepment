import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 6000, date: new Date(2023, 9, 13) },
    { title: "Car Seat", amount: 8000, date: new Date(2023, 9, 12) },
    { title: "Car Tyres", amount: 9000, date: new Date(2023, 9, 11) },
    { title: "Car Lights", amount: 10000, date: new Date(2023, 9, 10) },
  ];
  return (
    <div>
     <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
