import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import TabelaCategorias from './tabelaCategorias'
import ModalCriaCategoria from './modalNovaCategoria'
import * as helper from '../../../suporte/helper'

class TelaCategorias extends Component {

    state = {
        categorias: null,
        textoBusca: null
    }


    listaCompletaCategorias = () => {
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            url: helper.url.concat('categorias/listar'),
            method: 'get',
            headers: myHeaders
        }
        fetch(opcoes.url, opcoes).then(resposta => resposta.json()).then(categorias => {
            this.setState({
                categorias
            })           
        })
    }

    componentDidMount(){
        this.listaCompletaCategorias()
    }

    getCategorias = () => {
        let categorias = this.state.categorias
        let t = this.state.textoBusca
        if(t){
            categorias = this.state.categorias.filter(c => c.nome.toLowerCase().includes(t.toLowerCase()))
        }
        return categorias
    }

    alteraTextoBusca = (t) => {
        let texto = t ? t : null
        this.setState({
            textoBusca: texto
        })
    }

    abreModalCriaCategoria = e => {
        e.preventDefault()
        this.childAbreModalCriaCategoria()
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <div className="col s5"><h5>Categorias</h5></div>
                    <div className="col s6">
                        <SearchBar informaTxtBusca={(t) => {this.alteraTextoBusca(t)} } />
                    </div>
                    <div className="col s1">
                        <a 
                        onClick={e => this.abreModalCriaCategoria(e)}
                        style={{
                            marginTop: "1em"
                        }} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>
                <br />
                <br />
                <TabelaCategorias categorias={this.getCategorias()} />
                <ModalCriaCategoria listarCategorias={() => this.listaCompletaCategorias()} setAbreModal={f => this.childAbreModalCriaCategoria = f} />
            </div>
        )
    }
}

export default TelaCategorias