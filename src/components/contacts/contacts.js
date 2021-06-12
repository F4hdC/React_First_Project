import React, { Component } from 'react'
import PropTypes from 'prop-types'


// Para pasar los parametros a una clase, basta con llamarlo con this.props
class Contacts extends Component {
    render() {
        const {name,tel,email} = this.props;
        return (
            <div>
                <h3>Name of Contact: {name}</h3>
                <ul>
                    <li>Tel: {tel}</li>
                    <li>Email: {email}</li>
                </ul> 
            </div>
        )
    }
}
Contacts.defaultProps = {
    name : "Default props",
    tel  : "Default props",
    email: "Default props"
}

Contacts.propTypes = {
    name : PropTypes.string,
    tel : PropTypes.string,
    email : PropTypes.string
}

export default Contacts;