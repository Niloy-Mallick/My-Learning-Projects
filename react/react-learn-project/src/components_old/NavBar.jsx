import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDo from './ToDo';
import GenerateRandomQuote from './GenerateRandomQuote'

function NavBar() {
    return ( 
        <Router>
            <Routes>
                <ul>
                    <li><Route path="/todo" element={<ToDo/>}/>To Do App</li>
                    <li><Route path="/random-quote" element={<GenerateRandomQuote />}/> Quote Generator </li>
                </ul>
            </Routes>
        </Router>
     );
}

export default NavBar;