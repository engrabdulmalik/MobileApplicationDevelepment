import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = () => {
  const expenseDataHandler = (expensesdata) => {


    console.log(expensesdata);

  }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitData={expenseDataHandler}/>
      
    </div>
  );
};
export default NewExpense;
