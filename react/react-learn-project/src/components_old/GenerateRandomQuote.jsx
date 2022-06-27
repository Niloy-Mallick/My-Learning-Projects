import React, { useState } from 'react';

let quoteList = [
    "All our dreams can come true if we have the courage to pursue them ~ Walt Disney",
    "Honesty is the best policy ~ Edwin Sandys",
    "Even a stopped clock is right twice a day ~ Marie von Ebner-Eschenbach",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people ~ Eleanor Roosevelt",
    "The future belongs to those who prepare for it today ~ Malcolm X",
    "Insanity is doing the same thing over and over again and expecting different results ~ Albert Einstein",
    "It’s never too late to be who you might have been ~ George Eliot",
    "If you aren’t going all the way, why go at all? ~ Joe Namath",
    "The successful warrior is the average man, with laser-like focus ~ Bruce Lee",
    "Fortune favors the bold ~ Vergil"
]

function GenerateRandomQuote() {

    const[quote, setQuote] = useState(quoteList[Math.floor(Math.random() * quoteList.length)])
    function getQuote() {
        const q = quoteList[Math.floor(Math.random() * quoteList.length)]
        setQuote(q)
    }

    return ( 
        <div>
            {quote === "" ? null : <p>{quote}</p>}
            <button onClick={getQuote}>Generate Random Quote</button>
        </div>
     );
}

export default GenerateRandomQuote;