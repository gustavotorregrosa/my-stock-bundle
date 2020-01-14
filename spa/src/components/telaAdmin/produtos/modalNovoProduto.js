import React, { Component } from 'react'
import estilos from './estilos.module.css'
import M from 'materialize-css'

class NovoProduto extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false,

    }

    componentDidMount() {
        this.elem = document.getElementById('modal-novo-produto')
        this.instance = M.Modal.init(this.elem, {
            onCloseEnd: () => this.setState({
                loading: false,
                categoria: ""
            })
        })
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = () => {
        this.instance.open()
    }

    fechaModal = () => {
        this.instance.close()
    }


    render() {
        return (
            <div id="modal-novo-produto" className={['modal', estilos.wide].join(' ')}>
                <div className="modal-content">
                    <div className="input-field col s6">
                        <input id="novo-produto" type="text" className="validate" />
                        <label htmlFor="novo-produto">Novo Produto</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#" className="waves-effect waves-green btn-flat">Salvar</a>

                </div>
                {this.state.loading ? (<div className="progress"><div className="indeterminate"></div></div>) : null}

            </div>
        )
    }

}

export default NovoProduto