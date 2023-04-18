import ExpenseItem from "./components/ExpenseItem";

function App() {

  // doing the same as below in regular JS
  // const paragraph = document.createElement('p');
  // paragraph.textContent = 'This is a demo paragraph';
  // document.getElementById('root').append(paragraph);

  return (
    // this is advantage of React
    <div>
      <h2> Let's get started.</h2>
      <ExpenseItem></ExpenseItem>
    </div>

  );
}

export default App;
