import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import "./style.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import ProductGridPage from "./components/ProductGridPage"
import ProductPage from "./components/ProductPage"
import SearchPage from "./components/SearchPage"
import StorePage from "./components/StorePage"

import InventoryPage from "./components/InventoryPage"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/register"> <RegisterPage sellerRegistration={false} /> </Route>
        <Route path="/user/login"> <LoginPage sellerLogin={false} /> </Route>
        <Route path="/seller/register"> <RegisterPage sellerRegistration={true} /> </Route>
        <Route path="/seller/login"> <LoginPage sellerLogin={true} /> </Route>

        <Route path="/inventory"> <InventoryPage /> </Route>

        <Route path="/category/:pid/products" children={<ProductGridPage />}/>
        
        <Route path="/store/:sid/product/:pid"> <ProductPage /> </Route>
        <Route path="/store/:id"> <StorePage /> </Route>
        <Route path="/search"> <SearchPage /> </Route>
        <Route path="/"><ProductGridPage productCategoryID={null} /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
