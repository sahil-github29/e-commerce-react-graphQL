import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../../components/form-input";
import "./index.scss";
import CustomButton from "../../../components/custom-button";
import {
  googleSignInStart,
  emailSignInStart
} from "../../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart({ email, password });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    /* This is the way we can dynamically set proeprty on an object */
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <div>
        <h2 className="title">I already have an acccount</h2>
        <span>Sign in with your email and password</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="email"
          autoComplete="new-password"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="password"
          autoComplete="new-password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
