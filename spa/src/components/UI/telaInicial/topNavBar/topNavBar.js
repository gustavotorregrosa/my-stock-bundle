import React, { Component } from 'react'
import NavItem from '../../NavItem/navItem'
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../../suporte/icons.css'
import ModalLogin from '../../login/login'
import ModalLogout from '../../logout/logout'
import ModalRegistro from '../../registro/registro'

class TopNavBar extends Component {


    componentDidMount() {
        this.ativaSideNav()
    }

    constructor(props) {
        super(props)
        this.elem = null
        this.instancia = null
    }


    ativaSideNav = () => {
        if (this.instancia) {
            this.instancia.destroy()
        }
        this.elems = document.getElementById('minhasidenav')
        M.Sidenav.init(this.elems, {});
        this.instancia = M.Sidenav.getInstance(this.elems)
    }

    abreModalRegistro(e) {
        e.preventDefault()
        this.childAbreModalRegistro()
    }


    abreModalLogin(e) {
        e.preventDefault()
        this.childAbreModalLogin()
    }

    abreModalLogout(e) {
        e.preventDefault()
        this.childAbreModalLogout()
    }

    render() {
        return (
            <div>
                <nav className="black">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Stock Management</a>
                        <a href="#" onClick={(e) => this.instancia.open()} className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.props.logado != true ? <li><a href="#" onClick={(e) => this.abreModalRegistro(e)}>Registrar</a></li> : null}
                            {this.props.logado != true ? <li><a href="#" onClick={(e) => this.abreModalLogin(e)}>Login</a></li> : <li><a onClick={(e) => this.abreModalLogout(e)}>Logout</a></li>}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="minhasidenav">
                    {this.props.logado != true ? <li><a href="#">Login</a></li> : <li><a href="#" onClick={(e) => this.abreModalLogout(e)}>Logout</a></li>}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <li><div className="divider"></div></li>
                    <li><a href="#" onClick={(e) => this.instancia.close()} >Fechar</a></li>
                </ul>
                <ModalLogin setAbreModal={f => this.childAbreModalLogin = f} />
                <ModalLogout setAbreModal={f => this.childAbreModalLogout = f} />
                <ModalRegistro setAbreModal={f => this.childAbreModalRegistro = f} />
            </div>

        )
    }


}

const mapStateToProps = state => {
    return {
        logado: state.autenticacao.logado
    }
}

export default connect(mapStateToProps)(TopNavBar)