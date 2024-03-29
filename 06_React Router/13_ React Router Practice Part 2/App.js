import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Products from "./pages/products/Products"
import ProductDetails from "./pages/products/ProductDetails"


function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products"> {/* we want exact here because we don't want to get stuck with just the products path*/}
                    <Products />
                </Route>
                <Route path="/products/:productId">
                    <ProductDetails />
                </Route>
            </Switch>
            
            
            {/*
                Route between 2 components depending on the path:
                1. Home page ("/")
                2. Products Page ("/products")
                
                ** Home Page **
                • Can be a basic home page, maybe welcoming the user to your site and giving some background about yourself as a developer
                
                ** Products Page **
                • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
            */}
            
        </div>
    )
}

export default App