import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import * as helper from '../../../suporte/helper'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'


class NovaCategoria extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false,
        categoria: null
    }

    componentDidMount() {
        this.elem = document.getElementById('modal-nova-categoria')
        this.instance = M.Modal.init(this.elem, {})
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = () => {
        this.instance.open()
    }

    alterarTextoCategoria = (e) => {
        let categoria = e.target.value
        this.setState({
            categoria
        })
    }

    salvaCategoria = e => {
        e.preventDefault()
        

    }

    render() {
        return (
            <div id="modal-nova-categoria" className="modal">
                <div className="modal-content">
                    <div className="input-field col s6">
                        <input value={this.state.categoria} onChange={(e) => this.alterarTextoCategoria(e) } id="nova-categoria" type="text" className="validate" />
                        <label htmlFor="nova-categoria">Nova Categoria</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a onClick={e => this.salvaCategoria(e)} href="#!" className="modal-close waves-effect waves-green btn-flat">Salvar</a>
                </div>
            </div>
        )
    }
}

export default NovaCategoria