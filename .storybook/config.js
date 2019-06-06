import React from "react";
import { configure, addDecorator } from "@storybook/react";
import ThemeProviderWithGlobalStyles from "guild-js-theme/Provider";
import variables from "guild-js-theme/variables";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <ThemeProviderWithGlobalStyles theme={variables}>
    {storyFn()}
  </ThemeProviderWithGlobalStyles>
));

configure(loadStories, module);
