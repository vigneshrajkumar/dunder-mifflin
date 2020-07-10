import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import "./style.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import ProductGridPage from "./components/ProductGridPage"
import ProductPage from "./components/ProductPage"
import SearchPage from "./components/SearchPage"
import StorePage from "./components/StorePage"
import InventoryPage from "./components/InventoryPage"
import HomePage from "./components/HomePage"
import CartPage from "./components/CartPage"
import OrdersPage from './components/OrdersPage'
import E404Page from './components/E404Page'
import E500Page from './components/E500Page'

function App() {
  return (
    <BrowserRouter>
      <Switch>
     
        <Route path="/seller/register"> <RegisterPage sellerRegistration={true} /> </Route>
        <Route path="/seller/login"> <LoginPage sellerLogin={true} /> </Route>
        <Route path="/seller/inventory"> <InventoryPage /> </Route>
        <Route path="/seller/orders"> <OrdersPage /> </Route>

        <Route path="/user/register"> <RegisterPage sellerRegistration={false} /> </Route>
        <Route path="/user/login"> <LoginPage sellerLogin={false} /> </Route>
        
        <Route path="/categories/:cid/products" children={<ProductGridPage />} />
        <Route path="/stores/:sid/product/:pid"> <ProductPage /> </Route>
        <Route path="/stores/:sid"> <StorePage /> </Route>
        <Route path="/search"> <SearchPage /> </Route>
        <Route path="/cart"> <CartPage /> </Route>

        <Route path="/404"> <E404Page /> </Route>
        <Route path="/500"> <E500Page /> </Route>
        {/* <Route path="/"><Redirect to={{ pathname: "/404" }} /> </Route> */}
        <Route path="/"><HomePage/> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
