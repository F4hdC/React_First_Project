import React from 'react'

// Para pasar parametros a una funcion, hay que añadirlos dentro de los parentesis
const Navbar = (parametros) => {
    return (
        <div>
            <h1>{parametros.title}</h1>
        </div>
    )
}

export default Navbar;