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
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function () {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }

    abreModalRegistro(e){
        e.preventDefault()
        this.childAbreModalRegistro()
    }


    abreModalLogin(e){
        e.preventDefault()
        this.childAbreModalLogin()
    }

    abreModalLogout(e){
        e.preventDefault()
        this.childAbreModalLogout()
    }

    render(){
        return(
            <div>
                <nav className="black">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Stock Management</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.props.logado != true ? <li><a onClick={(e) => this.abreModalRegistro(e) }>Registrar</a></li> : null }
                            {this.props.logado != true ? <li><a onClick={(e) => this.abreModalLogin(e) }>Login</a></li> : <li><a onClick={(e) => this.abreModalLogout(e)}>Logout</a></li> }
                                        
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    {this.props.logado != true ? <li><a>Login</a></li> : <li><a onClick={(e) => this.abreModalLogout(e)}>Logout</a></li>}
                </ul>
                <ModalLogin setAbreModal={f => this.childAbreModalLogin = f}/>
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