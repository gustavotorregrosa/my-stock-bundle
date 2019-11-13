import React from 'react'
import classes from './telaInicial.module.css'
import Logo from '../logo/logo'
import NavBar from './topNavBar/topNavBar'

const telaInicial = () => (
    <div>
        <NavBar/>
        <h2 className={classes.verde}>Tela inicial...</h2>
        <Logo/>
    </div>
)

export default telaInicial