import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';



export default function Expenses(props) {
    const expenses = props.expenseList;
    const [filteredYear, setFilteredYear] = useState('2019');

    const yearFilterChangeHandler = (setYear) => {
        console.log('Expenses.js: setYear value received: ' + setYear);
        setFilteredYear(setYear);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
/*
    return ( 
        <Card className='expenses'>
            <ExpensesFilter selectedYear = {filteredYear} onYearFilterChange = {yearFilterChangeHandler}/>
            {filteredExpenses.length === 0 ? <p>No expenses Found</p> : 
                filteredExpenses.map((expenseRecord) => {
                    return <ExpenseItem expenseDetail = {expenseRecord} key = {expenseRecord.id}/>
                })
            }
        </Card>
     );
*/
/*
    let expensesContent = <p>No expenses Found</p>;
    
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expenseRecord) => {
            return <ExpenseItem expenseDetail = {expenseRecord} key = {expenseRecord.id}/>
        })
    }

    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selectedYear = {filteredYear} onYearFilterChange = {yearFilterChangeHandler}/>
            {expensesContent}
        </Card>
        </div>
    )
}
*/
    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selectedYear = {filteredYear} onYearFilterChange = {yearFilterChangeHandler}/>
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items = {filteredExpenses}/>
        </Card>
        </div>
    )
}



/*

Line 10:

props contains an object array item which is basically the expense records object array.
We stored the reference to the object array in expenses variable.
[In JS assignment operator in case of objects and arrays, just provides the reference address instead of assigning the value]

Line 11, 13-16:

filteredYear is a state variable that we declare with a default value of 2019.
We send the filteredYear value to ExpensesFilter component, where we use it to set the default value for the year dropdown.
When we change that value, the new year value is sent back to this level via the onYearFilterChange and update the filteredYear variable.
This way of two way interaction is called "TWO-WAY BINDING".

Line 18-20, 25 - 29:

We are using a ternary operation to display an appropriate message if the expenses list is calculated to be empty [checking expense
record values against the filteredYear variable value].

If the filteredExpenses object array is not empty [filteredExpense which is an array we get after applying filter operation with the condition that year
value for each matches the value of filteredYear variable]

We are iterating through the object array filteredExpenses, expenseRecord is an object in the array during each iteration.
We then pass that object via expenseDetail which is then accessed in the expenseItem component
JSX lines as prop.expenseDetail.<variable name>



ALTERNATIVE to Line 18 - 20, 25 - 29: [ Line 34 - 48 ]

We are setting up a variable with JSX value on the condition of the filteredExpenses being empty or not after applying filter action on it.
Then we are simply adding it to the render return method.

This will make the JSX render component much leaner and separate the logical part from the render part.

This method of rendering components on basis of a condition is called CONDITIONAL RENDERING.


Line 34 - 48 [ Alternative component holding the logic: Line 58 ]: 

We simplify it further and lean down Expenses Component by shifting the logic part of conditional rendering to another component
and send the filteredExpenses list.

In ExpensesList component we check list that we received is empty or not and on basis of that we render the list or in case of
empty list we render a messsage.

*/