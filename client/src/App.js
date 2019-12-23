import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header";
import Spinner from "./components/spinner";
import ErrorBoundary from "./components/error-boundary";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

import { GlobalStyles } from "./global.styles";

/* Lazy loading */
const Homepage = lazy(() => import("./pages/homepage"));
const ShopPage = lazy(() => import("./pages/shop"));
const CheckoutPage = lazy(() => import("./pages/checkout"));
const SignSignout = lazy(() => import("./pages/signIn-signup"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route exact path="/checkout" component={CheckoutPage}></Route>
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignSignout />
              }
            ></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

/* destructuring user reducer from state */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { checkUserSession })(App);
