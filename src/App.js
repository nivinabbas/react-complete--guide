import ExpennseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 0, amount: 230, title: 'Toyota', date: new Date(2021, 4, 12) },
    { id: 1, amount: 100, title: 'Honda', date: new Date(2001, 10, 8) },
    { id: 2, amount: 453, title: 'Audi', date: new Date(1998, 6, 1) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
