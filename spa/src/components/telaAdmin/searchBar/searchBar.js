import React, { Component } from 'react'
import estilo from './estilo.module.css'

class SearchBar extends Component {

    state = {
        texto: null
    }

    mudaTextoBusca = (e) => {
        let texto = e.target.value
        
    }

    render() {
        let listaClasses = ['card', estilo.quadroinput].join(' ')
        return (
            <div>
                <div className={listaClasses} >
                    <input onChange={(e) => this.mudaTextoBusca(e)} id="inp-busca" type="text" placeholder="Busca"/>
                </div>
            </div>
        )
    }
}

export default SearchBar