import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon";
import CartDropDown from "../cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.action";
import CartContext from "../../contexts/cart/cart.context";

/* styled components */
import {
  HeaderContiner,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./styled.components";

const Header = ({ currentUser, signOutStart }) => {
  const [hidden, setHidden] = useState(true);
  /* This is a "pattern" we use to pass function to child components,
   but with context provider */
  const toggleHidden = () => setHidden(!hidden);

  return (
    <HeaderContiner>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        <OptionLink to="/aboutus">ABOUT US</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <CartContext.Provider
          value={{
            hidden,
            toggleHidden
          }}
        >
          <CartIcon />
        </CartContext.Provider>
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContiner>
  );
};

/* const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
}); */

// replaced the above code with selectors
/* const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
}); */

// replaced the above code with "createStructuredSelector"
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, { signOutStart })(Header);
