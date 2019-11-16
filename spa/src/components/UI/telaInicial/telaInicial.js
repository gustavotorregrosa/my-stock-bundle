import React from 'react'
import classes from './telaInicial.module.css'
import Logo from '../logo/logo'
import NavBar from './topNavBar/topNavBar'
import estilizar from '../../../hoc/efeitos/aplicaEstilos'



const telaInicial = () => (
    <div>
        <NavBar />
       {estilizar(Logo, {
            textAlign: "center",
            marginTop: "8em"
       })}
    </div>
)

export default telaInicial