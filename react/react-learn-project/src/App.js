import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpensehandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    setExpenses((oldExpenses) => {
      return [ expense, ...oldExpenses ];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpensehandler}/>
      <Expenses expenseList = {expenses}/>
    </div>
  );
}

export default App;




/*  This is for components_old:
  import NavBar from './components_old/NavBar';
  import ToDo from './components_old/ToDo';
  import GenerateRandomQuote from './components_old/GenerateRandomQuote';
  import AppHeaderContent from './AppHeaderContent'
  
  const flag = 0;
  function App() {
    return (
      <header className="App-header">
        {(flag === 0) ? null : <ToDo/>}
        {(flag === 0) ? null : <AppHeaderContent />}
        {(flag === 1) ? null : <GenerateRandomQuote/>}
    </header>
    );
  }
*/