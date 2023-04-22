import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        // onSaveExpenseData points to onSaveExpenseDataHandler method which gets executed when we call onSaveExpenseData
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const stopExpenseEditHandler = () => {
        props.setExpenseEditable();
    }

    return ( 
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='expense-title'>Expense Title:</label>
                    <input 
                        id='expense-title' 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='expense-amount'>Expense Amount:</label>
                    <input 
                        id='expense-amount' 
                        type='number' 
                        min='0.00' 
                        step='0.01' 
                        value={enteredAmount} 
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='expense-date'>Expense Date:</label>
                    <input 
                        id='expense-date' 
                        type='date' 
                        min='2019-01-01' 
                        max='2025-12-31' 
                        value={enteredDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={stopExpenseEditHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
     );
}

export default ExpenseForm;



/*
--------------------------------------------------------IMPORTANT---------------------------------------------------------------

Alternative to using multiple useState is using one single state and setting and updating the values using objects.

Example:

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredAmount: ''
    });


Now anytime we are to update value of one variable, WE HAVE TO UPDATE ALL VARIABLES. If we do something like:
    
    setUserInput({
        enteredTitle: event.target.value
    });

Then in this case all other key value pairs like enteredDate and enteredAmount will be lost.

The way to update the values in this case will be as follows:

Example:

    setUserInput({
        ...userInput,
        enteredTitle: event.target.value
    });

So what happens in Line: 110-113 -

line 110: method call responsible to update the userInput object
line 111: (...) is the Spread operator that is responsible to pull all key-value pairs for the older userInput object
line 112: Once all key value pairs are pulled into the newer userInput object, we are updating the value for enteredTitle key
line 113: New userInput object replaces the older userInput while maintaining all key-value pairs and most recent updated values


ALTERNATIVELY PROPER APPROACH TO UPDATE THE VALUES [WHEN NEW STATE VALUE DEPENDS ON OLDER STATE VALUE]:

    setUserInput( (prevState) => {
        return { ...prevState, enteredTitle: event.target.value };
    });

Line 125-127: Gets older state value first and then updates existing key-value pairs and/or appends new data as coded.


REASON FOR ALTERNATIVE [ --IMPORTANT-- ]:

React uses a scheduler for its state update executions.
If the state update method relies on older value then:

    1. Line 110-113 and Line 125-127 will yield same results BUT in cases where a lot of state updates are scheduled, 
        i.  Line 110-113 approach may FAIL TO ALWAYS provide us with latest value
        ii. Line 125-127 approach is GUARANTEED to provide us with latest value

--------------------------------------------------------------------------------------------------------------------------------

*/