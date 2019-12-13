import React, { Component } from 'react'
import estilo from './estilo.module.css'

class SearchBar extends Component {
    render(){
        return(
            <div>
                <div className={['card', estilo.searchbar].join(' ')}>
                    <input type="text" value="gustavo" />
                </div>
            </div>
        )
    }

}

export default SearchBar