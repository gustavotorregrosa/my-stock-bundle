import store from '../store/store'
import { verificaLoginLS } from '../store/actions/index'

// export const pegaJWT = () => {
//     let meuJWT = store.getState()
//     console.log(meuJWT)
//     localStorage.setItem("jwt"," teste 123")
//     store.dispatch({
//         type: 'VERIFICA_LOGIN_LOCALSTORAGE'
//     })
//     setTimeout(() => {
//         meuJWT = store.getState()
//         console.log(meuJWT)
//     }, 2000)
// }

// export const myFetch = ()

const getJwt = () => {
    store.getState().autenticacao.jwt
}

const atualizaJwtUsuario = () => {
    store.dispach(verificaLoginLS())
}