import React, { Component } from 'react'
import { jwtFetch } from '../../../suporte/funcoes-customizadas'

class TabelaProdutos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            produtos: []
        }
        this.listaCompletaProdutos = this.listaCompletaProdutos.bind(this)
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
        this.props.setListaPropdutos(this.listaCompletaProdutos)
    }


    listaItens = () => {
        let produtos = this.state.produtos
        let tbl = []
        
        if (produtos.length) {
            if(this.props.categoriaSelecionada){
                let categoria = this.props.categoriaSelecionada
                produtos = produtos.filter(el => el.categoria == categoria)
            }
            tbl = produtos.map(el => (<tr key={el.id}><td>{el.nome}</td><td>{this.botoes(el)}</td></tr>))
        }
        

        return tbl

    }

    ativaEdicao = (e, el) => {
        e.preventDefault()
        this.props.editar(el)
    }

    ativaDelecao = (e, el) => {
        e.preventDefault()
        this.props.deletar(el)
       

    }

    botoes = el => (
        <div>
            <a href="#" onClick={(e) => this.ativaEdicao(e, el)}><i class="material-icons">edit</i></a>
            &nbsp;&nbsp;&nbsp;
                <a href="#" onClick={(e) => this.ativaDelecao(e, el)} ><i class="material-icons">delete</i></a>
        </div>
    )


    render() {
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