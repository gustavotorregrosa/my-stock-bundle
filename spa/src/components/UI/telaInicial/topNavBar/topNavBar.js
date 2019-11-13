import React from 'react'
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../../suporte/icons.css'


const topNavBar = (props) => {
    document.addEventListener('DOMContentLoaded', function () {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    });

    return(
        <div>
            <nav className="#5c6bc0 indigo lighten-1">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Stock Management</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {props.logado != true ? <li><a href="sass.html">Login</a></li> : <li><a href="sass.html">Logout</a></li>}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                {props.logado != true ? <li><a href="sass.html">Login</a></li> : <li><a href="sass.html">Logout</a></li>}
            </ul>
        </div>

    )


        
}

const mapStateToProps = state => {
    return {
        logado: state.autenticacao.logado
    }
}



export default connect(mapStateToProps)(topNavBar)