import logo from './logo.svg';
import './App.css';
import Contacts from './components/contacts/contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Contacts />
      </header>
    </div>
  );
}

export default App;
