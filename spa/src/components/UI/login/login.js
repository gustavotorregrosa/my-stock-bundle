import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class ModalLogin extends Component {
    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false
    }

    componentDidMount() {
        this.elem = document.querySelector('.modal')
        this.instance = M.Modal.init(this.elem, {})
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = () => {
        this.instance.open()
        M.updateTextFields()
    }

    fazerLogin = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            loading: !prevState.loading
        }))
    }

    render() {
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h6>Login</h6>
                        <div className="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" onClick={(e) => this.fazerLogin(e)} className="waves-effect waves-green btn-flat">Agree</a>
                        </div>
                           {this.state.loading ? (<div class="progress"><div class="indeterminate"></div></div>) : null}
                    </div>

                </div>
            </div>
        )
    }
}

export default ModalLogin