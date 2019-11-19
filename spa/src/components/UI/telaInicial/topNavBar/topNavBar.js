import React, { Component } from 'react'
import NavItem from '../../NavItem/navItem'
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../../suporte/icons.css'
import ModalLogin from '../../login/login'


class TopNavBar extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function () {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });    
    }

    render(){
        return(
            <div>
                <nav className="black">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Stock Management</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.props.logado != true ? <ul><a>Login</a></ul> : <NavItem link="/logout" exact>Logout</NavItem>}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    {this.props.logado != true ? <ul><a>Login</a></ul> : <NavItem link="/logout" exact>Logout</NavItem>}
                </ul>
                <ModalLogin/>
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