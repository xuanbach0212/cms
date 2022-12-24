import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import listProducts from '../pages/listProducts'
import Products from '../pages/Products'
import Test from '../pages/test'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Products}/>
            <Route path='/categories' component={Test}/>
            <Route path='/orders' component={listProducts}/>
        </Switch>
    )
}

export default Routes