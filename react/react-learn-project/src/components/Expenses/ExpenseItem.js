import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

function ExpenseItem(props) {

    const clickChangeTitleHandler = () => {

    }

    return ( 
    <Card className='expense-item'>
        <ExpenseDate date={props.expenseDetail.date}/>
        <div className='expense-item__description'>
            <h2>{props.expenseDetail.title}</h2>
            <div  className='expense-item__price'>${props.expenseDetail.amount}</div>
        </div>
        <button onClick={clickChangeTitleHandler}>Change Title</button>
    </Card> );
}

export default ExpenseItem;


/*

props contains many properties and correponding values.
Line 9-12:

props contains an object named expenseDetail which contains following information:
    1. id
    2. date
    3. title
    4. Amount

Thereby We can access above object variable values using:
props.<object name>.<object variable>

*/

