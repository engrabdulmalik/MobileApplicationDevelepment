import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const expenseDataHandler = (expensesdata) => {
    const newexpensedata = {
      ...expensesdata,
      id: Math.random().toString(),
    };
    props.onReceiveData(newexpensedata);

  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitData={expenseDataHandler} />
    </div>
  );
};
export default NewExpense;
