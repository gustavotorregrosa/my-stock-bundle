import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import ListaPaginacao from '../searchBar/listaPaginacao'
import SelectCategorias from './selectCategorias'
import TabelaProdutos from './tabelaProdutos'
import CriaEditaProduto from './modalCriaEditaProduto'
import DeletaProduto from './modalDeletaProduto'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'


class TelaProdutos extends Component {

    state = {
        categorias: [],
        selecao: null
    }

    componentDidMount() {
        this.listaCompletaCategorias()
    }

    listaCompletaCategorias = () => {
        jwtFetch("categorias/listar").then(categorias => {
            this.setState({
                categorias
            })
        })
    }

    abreModalEditar = el => {
        this.childAbreModalCriaEditaProduto(el)
    }

    abreModalDeletar = el => {
        this.childAbreModalDeletaProduto(el)
    }

    abreModalCriaProduto = e => {
        e.preventDefault()
        this.childAbreModalCriaEditaProduto()
    }

    listarProdutos = () => {
        this.childListaProdutos()
    }

    atualizaOpcaoSelect = selecao => {
        this.setState({
            selecao
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <div className="col s5"><h5>Produtos</h5></div>
                    <div className="col s6">
                        <SearchBar informaTxtBusca={(t) => { this.alteraTextoBusca(t) }} />
                    </div>
                    <div className="col s1">
                        <a
                            onClick={e => this.abreModalCriaProduto(e)}
                            style={{
                                marginTop: "1em"
                            }} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <SelectCategorias atualizaOpcao={(op) => this.atualizaOpcaoSelect(op)} categorias={this.state.categorias} />
                    </div>
                    <div className="col s4 offset-s4">
                        <ListaPaginacao />
                    </div>
                </div>
                <br />
                <br />
                <TabelaProdutos categoriaSelecionada={this.state.selecao} setListaPropdutos={f => this.childListaProdutos = f} editar={(el) => this.abreModalEditar(el)} deletar={(el) => this.abreModalDeletar(el)} />
                <CriaEditaProduto listarProdutos={() => this.listarProdutos()} categorias={this.state.categorias} setAbreModal={f => this.childAbreModalCriaEditaProduto = f} />
                <DeletaProduto setAbreModal={f => this.childAbreModalDeletaProduto = f} listarProdutos={() => this.listarProdutos()} />
             
            </div>
        )
    }

}

export default TelaProdutos