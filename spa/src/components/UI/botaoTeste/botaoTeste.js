import React from 'react'
import * as comportamento from './comportamento'

import 'materialize-css/dist/css/materialize.min.css'

const botaoTeste = () => (
    <div>
        <a onClick={(e) => comportamento.mandaMsg(e)} className="waves-effect waves-light btn">button</a>
    </div>
)

export default botaoTeste

