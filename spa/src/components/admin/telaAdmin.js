import React, {Component} from 'react'
import NavBar from '../telaInicial/topNavBarInicial/topNavBarInicial'
import { connect } from 'react-redux'
import TelaCategorias from '../telaAdmin/categorias/telaCategorias'

class TelaAdmin extends Component {

    componentDidUpdate(){
        if(this.props.logado === false){
            this.props.history.push('/')
        }
    }

    getSegundoParam = () => {
        let pathname = this.props.history.location.pathname
        let pathnameArr = pathname.split("/")
        console.log(pathnameArr)

    }

    render(){
        // console.log(this.props.history.location.pathname)
        this.getSegundoParam()
        return (
            <div>
                <NavBar/>
                <h2>Tela de admin</h2>
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