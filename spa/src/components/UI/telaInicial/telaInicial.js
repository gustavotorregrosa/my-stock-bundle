import React from 'react'
import classes from './telaInicial.module.css'
import NavBar from './topNavBar/topNavBar'

const telaInicial = () => (
    <div>
        <NavBar/>
        <h2 className={classes.verde}>Tela inicial...</h2>
    </div>
)

export default telaInicial