import * as actionTypes from '../actions/actionTypes'
import { atualizaObjeto } from '../utility'

const initialState = {
    abreRedirect: false
}

const abreRedirect = (state, action) => {
    return atualizaObjeto(state, {
        abreRedirect: true
    })
}

const fechaRedirect = (state, action) => {
    return atualizaObjeto(state, {
        abreRedirect: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ABRE_REDIRECT:
            return abreRedirect(state, action)
        case actionTypes.FECHA_REDIRECT:
            return fechaRedirect(state, action)
        default:
            return state
    }
}

export default reducer