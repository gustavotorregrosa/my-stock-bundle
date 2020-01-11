import React, { Component } from 'react'

class TabelaCategorias extends Component {

    listaItens = () => {
        if(this.props.categorias){
            let categorias = [...this.props.categorias]
            let tbl = categorias.map(el => (<tr key={el.id}><td>{el.nome}</td><td></td></tr>))
            return tbl
        }
        return null
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