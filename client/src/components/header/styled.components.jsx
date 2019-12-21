import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContiner = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

/* This is the way styled to built-in component like in this case <Link> */
export const LogoContainer = styled(Link)`
  padding: 10px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &:last-child {
    padding-right: 0px;
  }
`;
