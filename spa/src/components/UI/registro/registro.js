import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import * as helper from '../../suporte/helper'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'


class ModalRegistro extends Component {
    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)

    }

    state = {
        loading: false,
        nome: '',
        email: '',
        password: '',
        pvalidation: ''
    }

    componentDidMount() {
        this.elem = document.getElementById('modal3')
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

    fechaModal = () => {
        this.instance.close()
    }

    fazerLogin = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            url: helper.url.concat('usuario/registrar'),
            method: 'post',
            body: JSON.stringify(this.state),
            headers: myHeaderslogin
        }
        let status
        fetch(opcoes.url, opcoes).then(resposta => {
            status = resposta.status
            return resposta.json()
        }).then(data => {
            if (status == 200) {
                localStorage.setItem("usuario", JSON.stringify(data.usuario))
                localStorage.setItem("jwt", data.jwt)
                this.props.verificaLoginLocalStorage()

            }
            this.fechaModal()
            M.toast({ html: data.mensagem })

        })
    }

    handleChangeNome = (e) => {
        this.setState({
            nome: e.target.value
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

    handleChangePasswordValidation = (e) => {
        this.setState({
            pvalidation: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div id="modal3" className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="nome" value={this.state.nome} onChange={(e) => this.handleChangeNome(e)} type="text" className="validate" />
                                <label htmlFor="nome">Nome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" value={this.state.email} onChange={(e) => this.handleChangeEmail(e)} type="email" className="validate" />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" value={this.state.password} onChange={(e) => this.handleChangePassword(e)} type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" value={this.state.pvalidation} onChange={(e) => this.handleChangePasswordValidation(e)} type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" onClick={(e) => this.fazerLogin(e)} className="waves-effect waves-green btn-flat">Login</a>
                        </div>
                        {this.state.loading ? (<div className="progress"><div className="indeterminate"></div></div>) : null}
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verificaLoginLocalStorage: () => dispatch(actions.verificaLoginLS())
    }
}

export default connect(null, mapDispatchToProps)(ModalRegistro)