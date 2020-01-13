import React, { Component } from 'react'
import M from 'materialize-css'

class SelectCategorias extends Component {


    componentDidMount() {
        this.elem = document.querySelector("#slct-categorias")
        this.instance = M.FormSelect.init(this.elem, {});
    }


    componentWillUnmount(){
        this.instance.destroy();
    }

    render() {
        return (
            <div className="input-field col s12">
                <select id="slct-categorias">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
            </div>
        )
    }

}

export default SelectCategorias