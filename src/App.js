import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignSignout from "./pages/signInSignup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  /* before closing the browser, it will close the connection
  because google oAuth is open persistent connection.*/
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignSignout}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
