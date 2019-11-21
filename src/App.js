import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
