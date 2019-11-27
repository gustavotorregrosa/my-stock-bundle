import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import * as helper from '../../suporte/helper'

class ModalLogin extends Component {
    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false,
        email: '',
        password: ''
    }

    componentDidMount() {
        this.elem = document.querySelector('.modal')
        this.instance = M.Modal.init(this.elem, {
            onCloseEnd: () => this.setState({
                loading: false,
                email: '',
                password: ''
            })

        })
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = () => {
        this.instance.open()
        M.updateTextFields()
    }

    fazerLogin = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        console.log(helper.url)
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            url: helper.url.concat('usuario/login'),
            method: 'post',
            body: JSON.stringify(this.state),
            headers: myHeaders
        }
        let status
        fetch(opcoes.url, opcoes).then(resposta => {
            status = resposta.status
            return resposta.json()
        }).then(data => {
            M.toast({html: data.mensagem})
            M.toast({html: 'O Codigo: ' + status})
        
        })
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }


    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h6>Login</h6>
                        <div className="row">
                            <div class="input-field col s12">
                                <input id="email" value={this.state.email} onChange={(e) => this.handleChangeEmail(e)} type="email" className="validate" />
                                <label for="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <div class="input-field col s12">
                                <input id="password" value={this.state.password} onChange={(e) => this.handleChangePassword(e)} type="password" className="validate" />
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