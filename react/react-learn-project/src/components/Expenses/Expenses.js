import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {

    const expenses = props.items;
    return ( 
        <Card className='expenses'>
            {expenses.map(exp => {
                return <ExpenseItem expenseDetail = {exp}/>
            })}
        </Card>
     );
}

export default Expenses;


/*

Line 8:

props contains an object array item which is basically the expense records object array.
We stored the reference to the object array in expenses variable.
[In JS assignment operator in case of objects and arrays just provides the reference address instead of assigning the value]

Line 11 - 13:

We are iterating through the object array, exp is an object in the array during each iteration.
We then pass that object via expenseDetail which is then accessed in the expenseItem component
JSX lines as prop.expenseDetail.<variable name>

*/