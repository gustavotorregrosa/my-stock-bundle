import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import TelaInicial from './components/UI/telaInicial/telaInicial'
import TelaRedirect from './components/UI/redirect/redirect'
// import TelaLogin from './components/UI/login/login'
import * as actions from './store/actions/index'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import { connect } from 'react-redux'


const asyncLogin = asyncComponent(() => {
  return import('./components/UI/login/login')
})

class App extends Component {
  rotas = (
    <Switch>
      {/* <Route path="/login" component={asyncLogin}/> */}
      <Route path="/" component={TelaInicial}/>
    </Switch>
  )

  render() {
    return this.rotas
  }

}

const mapStateToProps = state => {
  return {
    redirectAberto: state.autenticacao.abreRedirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    abreRedirect: () => dispatch(actions.abreRedirect())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
