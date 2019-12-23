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
        loading: false
    }

    componentDidMount() {
        this.elem = document.getElementById('modal-nova-categoria')
        this.instance = M.Modal.init(this.elem, {})
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = () => {
        this.instance.open()
    }

    render() {
        return (
            <div id="modal-nova-categoria" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }
}

export default NovaCategoria