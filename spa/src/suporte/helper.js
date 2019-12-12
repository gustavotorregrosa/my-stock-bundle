export const url = 'http://stockmanager.test/api/'

export const getUrlParam = (n) => {
    let pathname = this.props.history.location.pathname
    let pathnameArr = pathname.split("/")
    let nParam = pathnameArr[n] ? pathnameArr[n] : null
    return nParam
}

export const getComponent = (n, opcoes) => {
    const nomeParam = getUrlParam(n)
    return opcoes[nomeParam] ? <opcoes[nomeParam] /> : null

}