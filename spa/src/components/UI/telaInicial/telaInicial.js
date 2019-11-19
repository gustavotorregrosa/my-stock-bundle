import React, { Component } from 'react'
import Logo from '../logo/logo'
import NavBar from './topNavBar/topNavBar'
import estilizar from '../../../hoc/efeitos/aplicaEstilos'

class TelaInicial extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {estilizar(Logo, {
                    textAlign: "center",
                    marginTop: "8em"
                })}
            </div>
        )
    }
}


export default TelaInicial