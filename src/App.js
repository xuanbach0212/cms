import React from 'react'
import {BrowserRouter,Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/app.css'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Layout/>
            </Switch>
        </BrowserRouter>
    )
}

export default App