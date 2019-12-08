import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: none;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;

export const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #3578e8;
    border: none;
  }
`;

/* adding class on conditional props */
const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: background-color 0.4s, border 0.4s;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
