import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import TabelaCategorias from './tabelaCategorias'

class TelaCategorias extends Component {

    state = {
        categorias: [
            {
                id: 1,
                nome: "Ciclismo"
            },
            {
                id: 2,
                nome: "Culinaria"
            },
            {
                id: 3,
                nome: "Livros"
            },
            {
                id: 4,
                nome: "Arte"
            },
            {
                id: 5,
                nome: "Musica"
            },
        ],
        textoBusca: null
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
                        <a style={{
                            marginTop: "1em"
                        }} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>
                <br />
                <br />
                <TabelaCategorias categorias={this.getCategorias()} />
            </div>
        )
    }
}

export default TelaCategorias