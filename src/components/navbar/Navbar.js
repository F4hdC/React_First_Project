import React from 'react'
import PropTypes from 'prop-types';
import  './Navbar.css';
// Para pasar parametros a una funcion, hay que añadirlos dentro de los parentesis
const Navbar = (parametros) => {
    // Creo un objeto para no repetir escribir parametros.....
    const { title } = parametros;
    return (
        <div className="h1_navbar">
            <h1>{title}</h1>
        </div>
    )
}

Navbar.defaultProps ={title:"Default title"}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

export default Navbar;