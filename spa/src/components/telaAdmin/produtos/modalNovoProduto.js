import React, { Component } from 'react'
import estilos from './estilos.module.css'
import M from 'materialize-css'
import SelectCategorias from './selectCategorias'
import { converteBase64, jwtFetch, carregaImagem as customFileLoader } from '../../../suporte/funcoes-customizadas'

class NovoProduto extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
        this.textArea = null
        this.inputNome = null
        this.inputArquivo = null
        this.inputTextoArquivo = null
    }

    state = {
        loading: false,
        imagem: null,
        nome: null,
        categoria: null,
        descricao: null

    }

    imporSelecaoCategoria = (c = null) => {
        this.childSelecionaCategoria(c)
    }

    zerarElementos = () => {
        this.textArea.value = null
        this.inputNome.value = null
        this.imporSelecaoCategoria()
        this.inputArquivo.files = null
        this.inputTextoArquivo.value = null
        document.getElementById("quadro-img").src = ""
    }

    zerarEstado = () => {
        this.setState({
            loading: false,
            nomeImagem: null,
            imagem: null,
            nome: null,
            categoria: null,
            descricao: null
        })

    }

    componentDidMount() {
        this.elem = document.getElementById('modal-novo-produto')
        this.instance = M.Modal.init(this.elem, {
            onCloseEnd: () => {
                this.zerarElementos()
                this.zerarEstado()
                
            }
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
        let nomeImagem = img.name
        const quadro = document.getElementById("quadro-img")
        customFileLoader(img, quadro)
        converteBase64(img).then(imagem => {
            imagem = imagem.split('base64,')[1]
            this.setState({
                nomeImagem,
                imagem
            })
        })
    }


    atualizaCategoria = categoria => {
        this.setState({
            categoria
        })
    }

    salvarProduto = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            url: 'produtos/salvar',
            method: 'post',
            body: JSON.stringify({
                ...this.state
            }),
            headers: myHeaders
        }
        setTimeout(() => {
            jwtFetch(opcoes.url, opcoes).then(r => {
                M.toast({ html: r.mensagem })
                this.fechaModal()
                // this.props.listarCategorias()
            }).catch(r => {
                M.toast({ html: r.conteudo.mensagem })
                this.fechaModal()
            })
        }, 1000);

    }

    alteraNomeProduto = e => {
        let nome = e.target.value
        this.setState({
            nome
        })
    }

    alteraDescricaoProduto = e => {
        let descricao = e.target.value
        this.setState({
            descricao
        })
    }

    render() {
        return (
            <div id="modal-novo-produto" className={['modal', estilos.wide].join(' ')}>
                <div className="modal-content">
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                ref={
                                    input => this.inputNome = input
                                }
                                onChange={e => this.alteraNomeProduto(e)} id="novo-produto" type="text" className="validate" />
                            <label htmlFor="novo-produto">Novo Produto</label>
                        </div>
                        <div className="col s6">
                            <SelectCategorias impoeCategoria={f => this.childSelecionaCategoria = f} atualizaOpcao={(op) => this.atualizaCategoria(op)} categorias={this.props.categorias} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea style={{
                                minHeight: "8em"
                            }}
                                ref={
                                    textarea => this.textArea = textarea
                                }

                                onChange={e => this.alteraDescricaoProduto(e)}
                                id="icon_prefix2" className="materialize-textarea"></textarea>
                            <label htmlFor="icon_prefix2">Descricao</label>
                        </div>
                        <div className="input-field file-field col s6">
                            <div className="col s6">
                                <img className="responsive-img" id="quadro-img" />
                            </div>
                            <div className="col s6">
                                <div className="btn">
                                    <span>File</span>
                                    <input ref={
                                        input => this.inputArquivo = input
                                    } onChange={e => this.carregaArquivo(e)} type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input
                                        ref={
                                            input => this.inputTextoArquivo = input
                                        }
                                        className="file-path validate" type="text" placeholder="Upload one or more files" />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#" onClick={e => this.salvarProduto(e)} className="waves-effect waves-green btn-flat">Salvar</a>

                </div>
                {this.state.loading ? (<div className="progress"><div className="indeterminate"></div></div>) : null}

            </div>
        )
    }

}

export default NovoProduto