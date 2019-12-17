import React from "react";
import "./index.scss";
import SignIn from "./signIn/index";
import SignUp from "./signUp/index";

export default props => (
  <div className="signin-signout">
    <SignIn />
    <SignUp />
  </div>
);
