import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import TabelaCategorias from './tabelaCategorias'
import ModalCriaCategoria from './modalNovaCategoria'
import ModalEditaCategoria from './modalEditaCategoria'
import ListaPaginacao from './listaPaginacao'
import * as helper from '../../../suporte/helper'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'

class TelaCategorias extends Component {

    state = {
        categorias: null,
        textoBusca: null,
        pagina: 1
    }

    numItensPorPagina = 5

    alteraPagina = pagina => {
        this.setState({
            pagina
        })
    }


    listaCompletaCategorias = () => {
        jwtFetch("categorias/listar").then(categorias => {
            this.setState({
                categorias
            })
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.listaCompletaCategorias()
        }, 100)
    }

    getCategorias = () => {
        let categorias = this.state.categorias
        let t = this.state.textoBusca
        if (t) {
            categorias = this.state.categorias.filter(c => c.nome.toLowerCase().includes(t.toLowerCase()))
        }
        return categorias
    }

    getCategoriasPaginadas = () => {
        let pagina = this.state.pagina
        let categoriasF = null
        let categorias = this.getCategorias()
        if (categorias) {
            categoriasF = categorias.filter((el, i) => {
                let inicioEm = (pagina - 1) * this.numItensPorPagina
                let finalEm = pagina * this.numItensPorPagina - 1
                if ((i >= inicioEm) && (i <= finalEm)) {
                    return true
                }
                return false
            })
        }
        return categoriasF
    }

    // abrirModalEdicao = (el) => {
    //     alert("abriu modal: " + el.id)
    // }

    alteraTextoBusca = (t) => {
        let texto = t ? t : null
        this.setState({
            textoBusca: texto,
            pagina: 1
        })
    }

    abreModalCriaCategoria = e => {
        e.preventDefault()
        this.childAbreModalCriaCategoria()
    }

    abreModalEditaCategoria = cat => {
        // e.preventDefault()
        this.childAbreModalEditaCategoria(cat)
    }


   

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <div className="col s5"><h5>Categorias</h5></div>
                    <div className="col s6">
                        <SearchBar informaTxtBusca={(t) => { this.alteraTextoBusca(t) }} />
                    </div>
                    <div className="col s1">
                        <a
                            onClick={e => this.abreModalCriaCategoria(e)}
                            style={{
                                marginTop: "1em"
                            }} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col s4 offset-s8">
                        <ListaPaginacao pagina={this.state.pagina} alteraPagina={(p) => this.alteraPagina(p)} numItensPorPagina={this.numItensPorPagina} categorias={this.getCategorias()} />
                    </div>
                </div>
                <br />
                <br />
                <TabelaCategorias editar={(el) => this.abreModalEditaCategoria(el)} categorias={this.getCategoriasPaginadas()} />
                <ModalCriaCategoria listarCategorias={() => this.listaCompletaCategorias()} setAbreModal={f => this.childAbreModalCriaCategoria = f} />
                <ModalEditaCategoria listarCategorias={() => this.listaCompletaCategorias()} setAbreModal={f => this.childAbreModalEditaCategoria = f} />

            </div>
        )
    }
}

export default TelaCategorias