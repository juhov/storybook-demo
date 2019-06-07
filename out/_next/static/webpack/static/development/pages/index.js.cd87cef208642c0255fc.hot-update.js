webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/guild-js-theme/variables.js":
/*!**************************************************!*\
  !*** ./node_modules/guild-js-theme/variables.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");

/**
 * Colors
 */

var colors = {
  burntSienna: "#ED6A5A",
  sidecar: "#F4F1BB",
  shadowGreen: "#9BC1BC",
  breakerBay: "#5CA4A9",
  greenWhite: "#E6EBE0",
  black: "#C30053",
  white: "#FFF"
}; // Aliases

colors.body = colors.black;
colors.primary = colors.burntSienna;
colors.secondary = colors.breakerBay;
/**
 * Fonts & Typography
 */

var fonts = {
  body: "'Helvetica Neue', sans-serif",
  mono: "Menlo, monospace"
};
var baseFontSize = 16;
var fontSizes = {
  0: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])("12px", baseFontSize),
  1: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])("16px", baseFontSize),
  2: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])("20px", baseFontSize),
  3: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])("25px", baseFontSize),
  4: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])("30px", baseFontSize),
  5: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rem"])("40px", baseFontSize)
};
fontSizes.body = 1;
/**
 * Utils
 */

var breakpoints = ["40em", "52em", "64em"]; // Border radius.

var radii = {
  small: 5,
  large: 10
};
var shadows = {
  small: "0 2px 6px 0 rgba(0,0,0,0.3);",
  large: "0 4px 15px 0 rgba(0,0,0,0.3)"
}; // Spacing units.

var space = {
  0: "0px",
  1: "20px",
  2: "40px",
  3: "80px"
};
space.layout = {
  vertical: [space[1], space[2], space[3]]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  baseFontSize: baseFontSize,
  breakpoints: breakpoints,
  radii: radii,
  space: space,
  fontSizes: fontSizes,
  colors: colors,
  fonts: fonts,
  shadows: shadows,
  // Card variants.
  cards: {
    "default": {
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
    "default": {
      backgroundColor: colors.secondary,
      borderRadius: radii.small,
      boxShadow: shadows.small,
      color: colors.greenWhite,
      padding: space[1],
      ":visited": {
        color: colors.greenWhite
      },
      ":not(:disabled):hover": {
        backgroundColor: Object(polished__WEBPACK_IMPORTED_MODULE_0__["darken"])(0.05, colors.secondary)
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
        backgroundColor: Object(polished__WEBPACK_IMPORTED_MODULE_0__["darken"])(0.05, colors.primary)
      },
      ":disabled": {
        opacity: 0.5
      }
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.js.cd87cef208642c0255fc.hot-update.js.map