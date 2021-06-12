import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';

// Para pasar los parametros a una funcion como la Navbar
function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>*/}
      <Navbar title="Title from Navbar: Contacts"/> 
      <Contacts name="David" tel="00332211" email="desde@clase.es"/>
      <Contacts name="Oscar" tel="02222222" email="desde2@clase.es"/>
    </div>
  );
}

export default App; 
