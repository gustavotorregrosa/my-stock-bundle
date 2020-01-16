import React, { Component } from 'react'
import estilos from './estilos.module.css'
import M from 'materialize-css'
import SelectCategorias from './selectCategorias'
import {converteBase64, carregaImagem as customFileLoader} from '../../../suporte/funcoes-customizadas'

class NovoProduto extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false,
        travaSalvar: false,
        imagem: null

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

    carregaArquivo = e => {
        const img = e.target.files[0]
        const quadro = document.getElementById("quadro-img")
        customFileLoader(img, quadro)
        converteBase64(img).then(imagem => this.setState({
            imagem
        }))
    } 


    render() {
        return (
            <div id="modal-novo-produto" className={['modal', estilos.wide].join(' ')}>
                <div className="modal-content">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="novo-produto" type="text" className="validate" />
                            <label htmlFor="novo-produto">Novo Produto</label>
                        </div>
                        <div className="col s6">
                            <SelectCategorias categorias={this.props.categorias} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea style={{
                                minHeight: "8em"
                            }} id="icon_prefix2" className="materialize-textarea"></textarea>
                            <label htmlFor="icon_prefix2">Descricao</label>
                        </div>
                        <div className="input-field file-field col s6">
                            <div className="col s6">
                                <img className="responsive-img" id="quadro-img"/>
                            </div>
                            <div className="col s6">
                                <div className="btn">
                                    <span>File</span>
                                    <input onChange={e => this.carregaArquivo(e)} type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                </div>

                            </div>

                        </div>

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