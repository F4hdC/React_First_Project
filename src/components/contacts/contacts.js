import React, { Component } from 'react'

// Para pasar los parametros a una clase, basta con llamarlo con this.props
class Contacts extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    <li>Tel: {this.props.tel}</li>
                    <li>Email: {this.props.email}</li>
                </ul> 
            </div>
        )
    }
}

export default Contacts;