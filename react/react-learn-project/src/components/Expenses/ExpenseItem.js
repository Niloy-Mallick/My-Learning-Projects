import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

function ExpenseItem(props) {

    const date = props.expenseDetail.date;
    const title = props.expenseDetail.title;
    const amount = props.expenseDetail.amount;

    return (
    <li>
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div  className='expense-item__price'>${amount}</div>
            </div>
        </Card>
    </li>
    ); 
}

export default ExpenseItem;


/*

props contains many properties and correponding values.
Line 8-10:

props contains an object named expenseDetail which contains following information:
    1. id
    2. date
    3. title
    4. Amount

Thereby We can access above object variable values using:
props.<object name>.<object variable>


Parent element is an <li> element because this is used in Expense List where this component is called inside a <ul> tag to print
the list of expenses

*/

