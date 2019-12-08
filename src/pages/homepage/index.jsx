import React from "react";
import DirectoryMenu from "../../components/directory-menu";

/* Styled Components */
import { HomepageContainer } from "./styled.components";

export default props => (
  <HomepageContainer className="homepage">
    <DirectoryMenu />
  </HomepageContainer>
);
