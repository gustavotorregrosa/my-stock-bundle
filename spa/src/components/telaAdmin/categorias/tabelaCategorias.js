import React, { Component } from 'react'

class TabelaCategorias extends Component {

    listaItens = () => {
        let categorias = [...this.props.categorias]
        let tbl = categorias.map(el => (<tr><td>{el.nome}</td><td></td></tr>))
        return tbl
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