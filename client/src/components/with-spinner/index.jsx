import React from "react";

import Spinner from "../spinner";

/* The above code can be written like this */
const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default withSpinner;
