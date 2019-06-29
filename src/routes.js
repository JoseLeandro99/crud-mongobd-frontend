import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Create from './pages/create'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={Create} />
    </Switch>
)

export default Routes