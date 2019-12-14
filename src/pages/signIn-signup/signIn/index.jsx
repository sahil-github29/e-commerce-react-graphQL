import React from "react";
import { connect } from "react-redux";
import FormInput from "../../../components/form-input";
import "./index.scss";
import CustomButton from "../../../components/custom-button";
import {
  googleSignInStart,
  emailSignInStart
} from "../../../redux/user/user.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart({ email, password });
  };

  handleChange = event => {
    const { value, name } = event.target;

    /* This is the way we can dynamically set proeprty on an object */
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <div>
          <h2 className="title">I already have an acccount</h2>
          <span>Sign in with your email and password</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
            label="email"
            autoComplete="new-password"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            handleChange={this.handleChange}
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
  }
}

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
