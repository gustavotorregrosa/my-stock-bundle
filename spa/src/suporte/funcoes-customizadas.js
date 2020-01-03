import store from '../store/store'
import { verificaLoginLS } from '../store/actions/index'
import { url as appUrl } from './helper'

const getJwt = () => {
    const jwt = store.getState().autenticacao.jwt
    return jwt
}

const atualizaJwtUsuario = () => {
    return new Promise((success, reject) => {
        store.dispatch(verificaLoginLS())
        success()
    })
}

const geraRequest = (rota, obj = null, method = "post") => {
    if (obj === null) {
        method = "get"
    }
    let h = new Headers()
    h.set("Content-Type", "application/json")
    h.set("jwt", getJwt())

    let objRequest = {
        method,
        headers: h,
    }

    if (method != "get") {
        objRequest.body = JSON.stringify(obj)
    }

    return new Request(appUrl + rota, objRequest)
}



const jwtFetchUnit = requestUnit => {
    return new Promise((success, reject) => {
        fetch(requestUnit).then(r => {
            let status = r.status
            success(r.json().then(conteudo => {
                return {
                    status,
                    conteudo
                }
            }))
        })
    })
}


const pFetchGarantido = (url, opcoes) => new Promise((success, reject) => {
    jwtFetchUnit(geraRequest(url, opcoes)).then(resp => success(resp))
})


export const jwtFetch = (url, opcoes = null) => {
    return new Promise((success, reject) => {
        pFetchGarantido(url, opcoes).then(r => {
            if (r.status == 203) {
                let objUsuario = r.conteudo
                localStorage.setItem('jwt', objUsuario.jwt)
                localStorage.setItem('usuario', JSON.stringify(objUsuario.usuario))
                atualizaJwtUsuario().then(() => geraRequest(url, opcoes)).then(r => jwtFetchUnit(r)).then(r => r.conteudo).then(r => success(r))
            } else {
                success(r.conteudo)
            }

        })
    })
}