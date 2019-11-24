import React, { Component } from 'react'
import Logo from '../logo/logo'
import NavBar from './topNavBar/topNavBar'
import estilizar from '../../../hoc/efeitos/aplicaEstilos'
import BotaoTeste from '../botaoTeste/botaoTeste'

class TelaInicial extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {estilizar(Logo, {
                    textAlign: "center",
                    marginTop: "8em"
                })}
                <BotaoTeste/>

            </div>
        )
    }
}


export default TelaInicial