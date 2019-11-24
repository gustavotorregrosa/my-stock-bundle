export const exibeMensagem = (e) => {
    e.preventDefault()
    alert("ola mundo")
    console.log(e)
}

export const mandaMsg = (e) => {
    e.preventDefault()
    fetch('http://stock-manager.test/api/teste').
    then(data => data.json()).
    then(data => console.log(data))
}