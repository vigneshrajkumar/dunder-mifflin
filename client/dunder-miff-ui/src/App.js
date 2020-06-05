import React from 'react';

import{
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import "./style.css"
import LoginPage from "./components/LoginPage"

function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route path="/seller/login"> <LoginPage/> </Route>
       <Route path="/"><div>home</div></Route>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
