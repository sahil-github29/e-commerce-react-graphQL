import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./styled.components";

/* const withSpinner = wrappedComponent => {
  // new functional component
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
     <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
    ) : (
      <wrappedComponent {...otherProps} />
    );
  };
  return Spinner;
}; */

/* The above code can be written like this */
const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
