import React, {useState} from 'react';

function StateDemonstration() {
    const [counter,setCounter] = useState(0);
    function increaseCounterfn() {
        setCounter(counter + 1);
    }

    function decreaseCounterfn() {
        setCounter(counter - 1);
    }
    return ( 
        <div>
            <p>Counter Value: {counter}</p>
            <button onClick={increaseCounterfn}>Increase Counter</button>
            <button onClick={decreaseCounterfn}>Decrease Counter</button>
        </div>
     );
}

export default StateDemonstration;

{/* 
    line 6:
    useState: method provides the initial value 0 to counter. setCounter method responsible to
    update counter

    setCounter upon call is respondible to call line 6 and provide value to useState() and thereby set new value to counter
    Whenever setCounter is called, react calls the same function StateDemonstration to re-render the elements with updated value from setCounter.

    counter is called state variable.
    setCounter is a setter method for counter


    2nd approach to update value is using method call inside the setCounter:
    
    Condition:
        IF and ONLY IF newer value is dependant on the older value then we use function
        to update, else we use normal way as above in approach 1.

    2nd approach:

        function increaseCounterfn() {
            setCounter(oldCounterValue => oldCounterValue + 1);     => Arrow method
        }

        function decreaseCounterfn() {
            setCounter(oldCounterValue => oldCounterValue - 1);     => Arrow method
        }
*/}