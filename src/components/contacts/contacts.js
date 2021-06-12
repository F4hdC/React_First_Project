import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import './Contacts.css'

// Para pasar los parametros a una clase, basta con llamarlo con this.props
class Contacts extends Component {

    state = {
        name:""
    }

    handleChange = (event) =>{
        this.setState({ // para almacenar algo dentro del state
            name: event.target.value,
        })
    }
    render() {
        //const {name,tel,email} = this.props;
        return (
            <div className="div_contacts">
                <h1>Contacts</h1>
                <input type="text" onChange={this.handleChange} />
                <button>Confirmar</button>
                <p>{this.state.name}</p>

            </div>
        )
    }
}
/* Contacts.defaultProps = {
    name : "Default props",
    tel  : "Default props",
    email: "Default props"
}

Contacts.propTypes = {
    name : PropTypes.string,
    tel : PropTypes.string,
    email : PropTypes.string
} */

export default Contacts;