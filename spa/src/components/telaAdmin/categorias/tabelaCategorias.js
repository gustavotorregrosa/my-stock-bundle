import React, { Component } from 'react'

class TabelaCategorias extends Component {

    listaItens = () => {
        if(this.props.categorias){
            let categorias = [...this.props.categorias]
            let tbl = categorias.map(el => (<tr key={el.id}><td>{el.nome}</td><td>{this.botoes(el)}</td></tr>))
            return tbl
        }
        return null
    }

    botoes = (el) => {
        return (
            <a href="#" onClick={(e) => this.ativaEdicao(e, el)}><i class="material-icons">edit</i></a>
        )
    }

    ativaEdicao = (e, el) => {
        e.preventDefault()
        this.props.editar(el)
        // alert("editando: " + el.id)
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Categorias</th>
                            <th>Acoes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.listaItens()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TabelaCategorias