import React from 'react'
import classes from './telaInicial.module.css'
import Logo from '../logo/logo'
import NavBar from './topNavBar/topNavBar'
import centralizar from '../../../hoc/centralizador/centralizador'


const telaInicial = () => (
    <div>
        <NavBar />
       {centralizar(Logo)}
    </div>
)

export default telaInicial