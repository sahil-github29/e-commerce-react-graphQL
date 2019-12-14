import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import CheckoutPage from "./pages/checkout";
import SignSignout from "./pages/signIn-signup";

import "./App.css";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignSignout />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

/* destructuring user reducer from state */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { checkUserSession })(App);
