import "./ExpenseItem.css";

function ExpenseItem(props) {
    //props has the 3 attributes that we sent to expenseItem in App.js
    //basically props is a bundle of title, amount and date
  // date object = year, month (array style), day


//   const expenseDate = new Date(2023, 3, 18);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 239.89;

  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
