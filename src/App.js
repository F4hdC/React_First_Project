import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';




// Para pasar los parametros a una funcion como la Navbar
function App() {
  return (
    <div className="App">
      <Navbar about={Contacts} title_about="Contacts" />
      
    </div>
  );
}

export default App; 
