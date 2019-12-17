import React from "react";

import { CustomButtonContainer } from "./styled.components";

export default ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
