import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
