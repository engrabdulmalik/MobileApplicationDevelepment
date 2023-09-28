import Chart from "../Chart/Chart";
const ExpenseChart = (props) => {
  const initialDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.dataPoints) {
    const newDataPoints = expense.date.getMonth();
    initialDataPoints[newDataPoints].value += expense.amount;
  }

  return (
    <div>
      <Chart newDataPoints={initialDataPoints} />
    </div>
  );
};

export default ExpenseChart;
