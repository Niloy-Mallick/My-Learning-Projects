import './App.css';
import NavBar from './components/NavBar';
import ToDo from './components/ToDo';
import GenerateRandomQuote from './components/GenerateRandomQuote';
import AppHeaderContent from './AppHeaderContent'
const flag = 0;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
        {(flag === 1) ? <ToDo/> : null}
        {(flag === 1) ? <AppHeaderContent /> : null}
        {(flag === 0) ? <GenerateRandomQuote/> : null}
      </header>
    </div>
  );
}

export default App;
