import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.body};
    margin: 0;
    text-size-adjust: 100%;
    overflow-x: hidden;
  }

`;

export default GlobalStyles;
