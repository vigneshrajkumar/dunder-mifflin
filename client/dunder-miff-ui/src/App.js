import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import "./style.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import LandingPage from "./components/LandingPage"
import ProductPage from "./components/ProductPage"
import SearchPage from "./components/SearchPage"
import StorePage from "./components/StorePage"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/register"> <RegisterPage sellerRegistration={false} /> </Route>
        <Route path="/user/login"> <LoginPage sellerLogin={false} /> </Route>
        <Route path="/seller/register"> <RegisterPage sellerRegistration={true} /> </Route>
        <Route path="/seller/login"> <LoginPage sellerLogin={true} /> </Route>

        <Route path="/category/:id/products"> <LandingPage productCategoryID={1} /> </Route>
        <Route path="/store/:sid/product/:pid"> <ProductPage /> </Route>
        <Route path="/store/:id"> <StorePage /> </Route>
        <Route path="/search"> <SearchPage /> </Route>
        <Route path="/"><LandingPage productCategoryID={null} /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
