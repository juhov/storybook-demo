import { rem, darken } from "polished";

/**
 * Colors
 */
const colors = {
  burntSienna: "#ED6A5A",
  sidecar: "#F4F1BB",
  shadowGreen: "#9BC1BC",
  breakerBay: "#5CA4A9",
  greenWhite: "#E6EBE0",
  black: "#C30053",
  white: "#FFF"
};
// Aliases
colors.body = colors.black;
colors.primary = colors.burntSienna;
colors.secondary = colors.breakerBay;

/**
 * Fonts & Typography
 */
const fonts = {
  body: `'Helvetica Neue', sans-serif`,
  mono: `Menlo, monospace`
};

const baseFontSize = 16;

const fontSizes = {
  0: rem("12px", baseFontSize),
  1: rem("16px", baseFontSize),
  2: rem("20px", baseFontSize),
  3: rem("25px", baseFontSize),
  4: rem("30px", baseFontSize),
  5: rem("40px", baseFontSize)
};
fontSizes.body = 1;

/**
 * Utils
 */
const breakpoints = ["40em", "52em", "64em"];

// Border radius.
const radii = {
  small: 5,
  large: 10
};

const shadows = {
  small: "0 2px 6px 0 rgba(0,0,0,0.3);",
  large: "0 4px 15px 0 rgba(0,0,0,0.3)"
};

// Spacing units.
const space = {
  0: "0px",
  1: "20px",
  2: "40px",
  3: "80px"
};
space.layout = {
  vertical: [space[1], space[2], space[3]]
};

export default {
  baseFontSize,
  breakpoints,
  radii,
  space,
  fontSizes,
  colors,
  fonts,
  shadows,
  // Card variants.
  cards: {
    default: {
      backgroundColor: colors.white,
      borderRadius: radii.large,
      boxShadow: shadows.large,
      transition: "box-shadow 300ms, transform 300ms",
      "&:hover": {
        transform: "translateY(5px)",
        boxShadow: shadows.small
      }
    },
    flat: {
      backgroundColor: colors.greenWhite,
      borderRadius: radii.large
    }
  },
  // Button variants.
  buttons: {
    default: {
      backgroundColor: colors.secondary,
      borderRadius: radii.small,
      boxShadow: shadows.small,
      color: colors.greenWhite,
      padding: space[1],
      ":visited": {
        color: colors.greenWhite
      },
      ":not(:disabled):hover": {
        backgroundColor: darken(0.05, colors.secondary)
      },
      ":disabled": {
        opacity: 0.5
      }
    },
    primary: {
      backgroundColor: colors.primary,
      borderRadius: radii.small,
      boxShadow: shadows.small,
      color: colors.greenWhite,
      padding: space[1],
      ":visited": {
        color: colors.greenWhite
      },
      ":not(:disabled):hover": {
        backgroundColor: darken(0.05, colors.primary)
      },
      ":disabled": {
        opacity: 0.5
      }
    }
  }
};
