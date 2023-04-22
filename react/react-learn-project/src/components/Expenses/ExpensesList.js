import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

export default function ExpensesList(props) {
    
    if (props.items.length === 0) {
        return <h5 className='expenses-list__fallback'>No Expenses Found.</h5>
    }

    return (
        <ul className='expenses-list'>
        {  
            props.items.map(expenseRecord => {
                return (
                    <ExpenseItem 
                    expenseDetail = {expenseRecord} 
                    key = {expenseRecord.id}/>
                );
            })
        }
        </ul>
    )
}

/*

    This component is an example of Conditional Rendering. It accepts a list of filtered expenses list
    through the prop and then it conditionally renders elements on basis of whether the length of the
    expense list is 0 or not.

*/