import React, {Component} from 'react'
import NavBar from '../topNavBar/topNavBar'
import { connect } from 'react-redux'

class TelaAdmin extends Component {

    componentDidUpdate(prevProps){
        if(prevProps.logado === null && this.props.logado === false){
            this.props.history.push('/')
        }
    }

    render(){
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