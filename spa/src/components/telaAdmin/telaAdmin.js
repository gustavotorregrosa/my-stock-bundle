import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import NavBar from './topNavBarAdmin/topNavBarAdmin'
import { connect } from 'react-redux'
import TelaCategorias from './categorias/telaCategorias'

class TelaAdmin extends Component {
    componentDidUpdate() {
        if (this.props.logado === false) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <h2>Tela de admin</h2>
                <Route path='/admin/categorias' component={TelaCategorias} />

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