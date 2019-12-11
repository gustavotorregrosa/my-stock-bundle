import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../../suporte/icons.css'
import ModalLogout from '../logout/logout'

class TopNavBar extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instancia = null
    }

    componentDidMount() {
        this.ativaSideNav()
    }

    ativaSideNav = () => {
        if (this.instancia) {
            this.instancia.destroy()
        }
        this.elems = document.getElementById('minhasidenav')
        M.Sidenav.init(this.elems, {});
        this.instancia = M.Sidenav.getInstance(this.elems)
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
                        <a href="#" className="brand-logo">Stock Management 2</a>
                        <a href="#" onClick={(e) => this.instancia.open()} className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" onClick={(e) => this.abreModalLogout(e)}>Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="minhasidenav">
                    <li><a href="#" onClick={(e) => this.abreModalLogout(e)}>Logout</a></li>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <li><div className="divider"></div></li>
                    <li><a href="#" onClick={(e) => this.instancia.close()} >Fechar</a></li>
                </ul>
                <ModalLogout setAbreModal={f => this.childAbreModalLogout = f} />
            </div>

        )
    }
}

export default TopNavBar