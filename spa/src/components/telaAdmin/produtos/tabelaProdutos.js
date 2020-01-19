import React, {Component} from 'react'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'

class TabelaProdutos extends Component {

    state = {
        produtos: []
    }

    listaCompletaProdutos = () => {
        jwtFetch("produtos/listar").then(produtos => {
            this.setState({
                produtos
            })
        })
    }

    componentDidMount() {
        this.listaCompletaProdutos()
        setTimeout(() => {
            console.log("lista de produtos")
            console.log(this.state)
        }, 3000)
    }


    listaItens = () => {
        let produtos = this.state.produtos
        let tbl = []
        if(produtos.length){
        tbl = produtos.map(el =>  (<tr key={el.id}><td>{el.nome}</td><td>{this.botoes(el)}</td></tr>))
        }

        return tbl

    }

    ativaEdicao = (e, el) => {
        e.preventDefault()
        this.props.editar(el)
    }

    botoes = el => (
            <div>
                <a href="#" onClick={(e) => this.ativaEdicao(e, el)}><i class="material-icons">edit</i></a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" ><i class="material-icons">delete</i></a>
            </div>
        )
    

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