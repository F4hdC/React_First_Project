import React from 'react'

// Para pasar parametros a una funcion, hay que añadirlos dentro de los parentesis
const Navbar = (parametros) => {
    // Creo un objeto para no repetir escribir parametros.....
    const { title } = parametros;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

Navbar.defaultProps ={title:"Default title"}
export default Navbar;