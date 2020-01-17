import React, { Component } from 'react'
import M from 'materialize-css'

class SelectCategorias extends Component {

    componentDidMount() {
        this.instance = M.FormSelect.init(this.elem, {})
    }

    gerarOpcoes = () => {
        let categorias = []

        if (this.props.categorias) {
            categorias = this.props.categorias.map(el => (<option value={el.id}>{el.id} {el.nome}</option>))
        }

        return categorias
    }

    enviaCatSelecionada = () => {
        this.instance.destroy()
        this.instance = M.FormSelect.init(this.elem, {})
        let i = this.instance.getSelectedValues()[0]
        if (this.props.atualizaOpcao) {
            this.props.atualizaOpcao(i)
        }

    }


    componentWillUnmount() {
        this.instance.destroy()
    }

    componentDidUpdate() {
        this.instance.destroy();
        this.instance = M.FormSelect.init(this.elem, {})
    }

    render() {
        return (
            <div className="input-field col s12">
                <select ref={
                    select => this.elem = select
                }
                    onChange={() => this.enviaCatSelecionada()}>
                    <option value="" disabled selected>Escolha a categoria</option>
                    {this.gerarOpcoes()}
                </select>
                <label>Categorias</label>
            </div>
        )
    }

}

export default SelectCategorias