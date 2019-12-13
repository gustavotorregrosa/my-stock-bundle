import React, { Component } from 'react'
import estilo from './estilo.module.css'

class SearchBar extends Component {
    render(){
        return(
            <div>
                <div className={['card row', estilo.searchbar].join(' ')}>
                    <div className={['col s11', estilo.quandroinput].join(' ')} >
                        <input type="text" /> 
                    </div>
                    <div className="col s1">
                        <i class="material-icons">search</i>
                    </div>
                   
                    
                </div>
            </div>
        )
    }

}

export default SearchBar