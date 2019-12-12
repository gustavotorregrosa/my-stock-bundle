import React, { Component } from 'react'
import NavBar from './topNavBarAdmin/topNavBarAdmin'
import { connect } from 'react-redux'
import TelaCategorias from './categorias/telaCategorias'
import { getComponent } from '../../suporte/helper'

class TelaAdmin extends Component {
    componentDidUpdate() {
        if (this.props.logado === false) {
            this.props.history.push('/')
        }
    }

    opcoesComponentes = {
        categorias: "TelaCategorias"
    }

    render() {
        return (
            <div>
                <NavBar />
                <h2>Tela de admin ola 123</h2>
                {getComponent(2)}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        logado: state.autenticacao.logado,
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(TelaAdmin)