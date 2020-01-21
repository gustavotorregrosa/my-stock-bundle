import React, { Component } from 'react'
import estilos from './estilos.module.css'
import M from 'materialize-css'
import SelectCategorias from './selectCategorias'
import { converteBase64, jwtFetch, carregaImagem as customFileLoader } from '../../../suporte/funcoes-customizadas'

class CriaEditaProduto extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
        // this.setState = this.setState.bind(this)
        this.textArea = null
        this.inputNome = null
        this.inputArquivo = null
        this.inputTextoArquivo = null
        this.alteraEstado = this.alteraEstado.bind(this)
        
    }

    state = {
            loading: null,
            id: null,
            nomeImagem: null,
            imagem: null,
            nome: null,
            categoria: null,
            descricao: null
    }



    alteraEstado = obj => {
        this.setState(obj)
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

    // setInitialState = () => {
    //     console.log("teste")
    //     console.log(this)
    //     this.setState = ({
    //         loading: null,
    //         id: null,
    //         nomeImagem: null,
    //         imagem: null,
    //         nome: null,
    //         categoria: null,
    //         descricao: null
    //     })

    // }

    componentDidMount() {
        this.elem = document.getElementById('modal-novo-produto')
        this.instance = M.Modal.init(this.elem, {
            // onCloseStart: () => {
            //     this.zerarElementos()
            //     this.setInitialState()
               
            // }
        })
        this.props.setAbreModal(this.abrirModal)

    }

    abrirModal = () => {
        this.instance.open()
        this.zerarElementos()
        this.alteraEstado = ({
            loading: null,
            id: null,
            nomeImagem: null,
            imagem: null,
            nome: null,
            categoria: null,
            descricao: null
        })
        // if (p) {
        //     this.inputNome.value = p.nome
        //     this.textArea.value = p.descricao
        //     M.textareaAutoResize(this.textArea)
        //     M.updateTextFields()
        //     this.imporSelecaoCategoria(p.categoria)

        //     // this.setState({
        //     //     ...p
        //     // })


        //     this.atualizaEstado({
        //         categoria: "laranja"
        //     })

        //     this.exibeImagem(p.imagem)
        // }

    }


    getExtensaoMime = str => {
        let extensao = str.split('.')[1]
        if (extensao == "jpg") {
            extensao = "jpeg"
        }
        return extensao
    }


    exibeImagem = (nomeImagem = null) => {
        if (nomeImagem) {
            jwtFetch("produtos/imagem/" + nomeImagem).then(r => {
                let extensao = this.getExtensaoMime(nomeImagem)
                const imagem = "data:image/" + extensao + ";base64," + r.imagem64
                const quadro = document.getElementById("quadro-img")
                quadro.src = imagem
            })

        }

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
            this.alteraEstado({
                nomeImagem,
                imagem
            })
        })
    }


    atualizaCategoria = categoria => {
        this.alteraEstado({
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
                this.props.listarProdutos()
                this.fechaModal()
            }).catch(r => {
                M.toast({ html: r.conteudo.mensagem })
                this.fechaModal()
            })
        }, 1000);

    }

    alteraNomeProduto = e => {
        let nome = e.target.value
        this.alteraEstado({
            nome
        })
    }

    alteraDescricaoProduto = e => {
        let descricao = e.target.value
        this.alteraEstado({
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

export default CriaEditaProduto