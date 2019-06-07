import React from "react";
import { ThemeProvider } from "styled-components";
import variables from "./variables";
import GlobalStyles from "./GlobalStyles";

const ThemeProviderWithGlobalStyles = ({ children }) => {
  return (
    <ThemeProvider theme={variables}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

export default ThemeProviderWithGlobalStyles;
