import React from 'react';
import './ExpensesFilter.css'

const yearFilterValues = ['2019','2020','2021','2022'];


function ExpenseFilter(props) {

    const onSelectingYearHandler = (event) => {
        const selectedYear = event.target.value;
        props.onYearFilterChange(selectedYear);
    }

    return ( 
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='yearFilter'>Filter By Year</label>
                <select id = 'yearFilter' value={props.selectedYear} onChange={onSelectingYearHandler}>
                    {yearFilterValues.map(yearFilterValue => {
                        return <option value={yearFilterValue} key={yearFilterValue + '-key'}>{yearFilterValue}</option>
                    })}
                </select>
            </div>
        </div>
     );
}

export default ExpenseFilter;