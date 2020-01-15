import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import ListaPaginacao from '../searchBar/listaPaginacao'
import SelectCategorias from './selectCategorias'
import TabelaProdutos from './tabelaProdutos'
import ModalCriaProduto from './modalNovoProduto'

class TelaProdutos extends Component {

    state = {
        categorias: [
            {
                id: 1,
                nome: "Gustavo"
            },
            {
                id: 2,
                nome: "Felipe"
            }
        ]
    }


    abreModalCriaProduto = e => {
        e.preventDefault()
        this.childAbreModalCriaProduto()
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
                        <SelectCategorias categorias={this.state.categorias}/>
                    </div>
                    <div className="col s4 offset-s4">
                        <ListaPaginacao  />
                    </div>
                </div>
                <br />
                <br />
                <TabelaProdutos/>
                <ModalCriaProduto setAbreModal={f => this.childAbreModalCriaProduto = f}/>

                


            </div>
        )
    }

}

export default TelaProdutos