import React from 'react'
import PropTypes from 'prop-types';
import  './Navbar.css';
import Home from '../home/Home';
import Features from '../Features/Features';
import Pricing from '../pricing/Pricing';

// Importo las rutas para la navegacion 
import { BrowserRouter as Router, Route,Link,NavLink } from 'react-router-dom';

// Para pasar parametros auna funcion, hay que añadirlos dentro de los parentesis
const Navbar = (parametros) => {
    // Creo un objeto para no repetir escribir parametros.....
    const { about,title_about } = parametros;
   // var active = "active"
    return (
        <Router>
        <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><NavLink to="/" exact className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/Features" className="nav-link">Features</NavLink></li>
            <li className="nav-item"><NavLink to="/Pricing" className="nav-link">Pricing</NavLink></li>
            {/* <li className="nav-item"><Link to="#" className="nav-link">FAQs</Link></li> */}
            <li className="nav-item"><NavLink to="/About" className="nav-link">{title_about}</NavLink></li>
          </ul>
        </header>
      <Route path="/" exact component={Home} />
      <Route path="/Features" component={Features} />
      <Route path="/Pricing" component={Pricing} />
      <Route path="/About" component={about} /> 

      </div>
      </Router>
    )
}

Navbar.defaultProps ={title:"Default title"}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

export default Navbar;