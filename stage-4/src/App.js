import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import StoreFront from './components/StoreFront/StoreFront'
import { HashRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className='App'>
                    <NavBar />
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/storefront' component={StoreFront} />
                            <Route
                                path='/shoppingcart'
                                component={ShoppingCart}
                            />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App
