import React from 'react'
import PropTypes from 'prop-types';
import  './Navbar.css';

// Para pasar parametros a una funcion, hay que añadirlos dentro de los parentesis
const Navbar = (parametros) => {
    // Creo un objeto para no repetir escribir parametros.....
    const { title } = parametros;
    return (
        <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
        </header>
      </div>
    )
}

Navbar.defaultProps ={title:"Default title"}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

export default Navbar;