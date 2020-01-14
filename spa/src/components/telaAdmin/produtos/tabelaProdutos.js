import React, {Component} from 'react'

class TabelaProdutos extends Component {

    listaItens = () => {
        let tbl = [
            (<tr><td>Produto 1</td><td></td></tr>),
            (<tr><td>Produto 2</td><td></td></tr>),
            (<tr><td>Produto 3</td><td></td></tr>)
        ]
        return tbl
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Produtos</th>
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


export default TabelaProdutos