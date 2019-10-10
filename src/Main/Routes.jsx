import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home'
import Produtos from '../components/Produtos/Produtos'
import Empresa from '../components/Empresa/Empresa'
import Contato from '../components/Contato/Contato'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/parceiros' component={Produtos} />
        <Route path='/empresa' component={Empresa} />
        <Route path='/contato' component={Contato} />
        <Redirect from="*" to='/' />
    </Switch>