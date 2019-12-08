import React from "react";
import DirectoryMenu from "../../components/directory-menu";
import UserProfile from "../../components/hoc-example/user-profile";
import UserList from "../../components/hoc-example/user-list";

/* Styled Components */
import { HomepageContainer } from "./styled.components";

export default props => (
  <HomepageContainer className="homepage">
    <DirectoryMenu />
    <UserProfile />
    <UserList />
  </HomepageContainer>
);
