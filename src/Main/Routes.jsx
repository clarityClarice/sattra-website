import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home'
import Parceiros from '../components/Parceiros/Parceiros'
import Empresa from '../components/Empresa/Empresa'
import Contato from '../components/Contato/Contato'
import Produtos from '../components/Produtos/Produtos'
import Clientes from '../components/Clientes/Clientes'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/parceiros' component={Parceiros} />
        <Route path='/empresa' component={Empresa} />
        <Route path='/contato' component={Contato} />
        <Route path='/produtos' component={Produtos} />
        <Route path="/clientes" component={Clientes} />
        <Redirect from="*" to='/' />
    </Switch>