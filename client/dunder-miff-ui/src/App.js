import React from 'react';

import{
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import "./style.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import LandingPage from "./components/LandingPage"


function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route path="/user/register"> <RegisterPage sellerRegistration={false} /> </Route>
       <Route path="/user/login"> <LoginPage sellerLogin={false} /> </Route>
       <Route path="/seller/register"> <RegisterPage sellerRegistration={true} /> </Route>
       <Route path="/seller/login"> <LoginPage sellerLogin={true} /> </Route>
       <Route path="/"><LandingPage /></Route>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
