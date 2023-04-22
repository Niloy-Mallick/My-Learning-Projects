import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    const [ elementVisibility, setElementVisibility ] = useState(false);
    const onSaveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: 'e' + Math.random().toString()
        };
        props.onAddExpense(expenseData);
        disableEdit();
    }

    const enableEdit = () => {
        setElementVisibility(true);
    }

    const disableEdit = () => {
        setElementVisibility(false);
    }

    return ( 
        <div className='new-expense'>
            {!elementVisibility && <button onClick={enableEdit}>Add New Expense</button>}
            {elementVisibility && <ExpenseForm onSaveExpenseData={onSaveExpenseDatahandler} setExpenseEditable = {disableEdit}/>}
        </div>
     );
}

export default NewExpense;

/*

--------------------------------------------------------IMPORTANT------------------------------------------------------

Explanation for sending data bottom-up approach i.e from a child component to a parent component

NewExpense and ExpenseForm is a good example to explain the concept of sending back data from child component
to parent component (Bottom-up)

We are doing so because ExpenseForm generates expense data records that needs to be appended to the object array
located in App.js

To do so we have to send data up from ExpenseForm.js -> NewExpense.js -> App.js [ Cannot skip any level of hierarchy ]

We have seen that to access data residing in parent component from child component, we send the data as argument
by stating inside the component tag and then at child level access it using "props.<parameter-name>"

When we have to send data from a child to parent component we have to follow the following steps:

1.  Create a parameterised method at the parent component that stores the parameter value to a variable
    [ NewExpense.js: Line: 7-13 ]

2.  Pass the method to the child component similar to how we pass data from parent component to child component.
    What this does is internally it sends the child component, a pointer reference to the function defined at
    parent level.
    onSaveExpenseData is a custom prop following a standardized nomenclature to hold the pointer reference of
    saveExpenseDataHandler method
    [ NewExpense.js: Line: 18 ]

3.  Now the method created at parent component level is accessible to the child component.
    i.  Call the method and pass the data at child component level as the parameter value during the method call.
    ii. This executes the method at the parent component level and passes data from child component through the 
        method and stores it in a variable at the parent component level.
[ ExpenseForm.js: Line: 19: props.onSaveExpenseData(expenseData); ]

-----------------------------------------------------------------------------------------------------------------------

*/