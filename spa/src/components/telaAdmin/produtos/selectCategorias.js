import React, { Component } from 'react'
import M from 'materialize-css'

class SelectCategorias extends Component {


    componentDidMount() {
        this.instance = M.FormSelect.init(this.elem, {});
    }

    gerarOpcoes = () => {
        let categorias = []
        
        if(this.props.categorias){
            categorias = this.props.categorias.map(el => (<option value={el.id}>{el.nome}</option>))
        }

        return categorias
    }


    componentWillUnmount(){
        this.instance.destroy();
    }

    render() {
        return (
            <div className="input-field col s12">
                <select ref={
                    select => this.elem = select
                }>
                    <option value="" disabled selected>Escolha a categoria</option>
                    {this.gerarOpcoes()}
                </select>
                <label>Categorias</label>
            </div>
        )
    }

}

export default SelectCategorias