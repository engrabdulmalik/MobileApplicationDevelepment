import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const filterSubmitHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear)
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectYear={selectedYear}
          onFilteredYear={filterSubmitHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
