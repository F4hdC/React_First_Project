import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';


// Para pasar los parametros a una funcion como la Navbar
function App() {
  return (
    <div className="App">
      <Navbar />
      <Contacts name="David" tel="00332211" email="desde@clase.es"/>
    </div>
  );
}

export default App; 
