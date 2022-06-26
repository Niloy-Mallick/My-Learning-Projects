import React from 'react';
import Card from '../UI/Card';
import './ExpenseDate.css'
function ExpenseDate(props) {

    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});

    return ( 
        <Card className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </Card>
     );
}

export default ExpenseDate;


/*

Line 6-8:

We simply received date for an expense record from props and segregated it into
month, year and date and then passed it to the JSX syntax as required

Note: Each props in each component are different entities and are ABSOLUTELY NOT THE SAME.

*/