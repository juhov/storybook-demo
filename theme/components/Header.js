import React from "react";
import PropTypes from "prop-types";
import { Box, Heading } from "guild-js-theme";

const Header = ({ title }) => (
  <Box py={[1, 2]} px={[1, 2, 3]} backgroundColor="primary">
    <Heading as="h1" color="sidecar" fontSize={[3, 5]} fontWeight={400}>
      {title}
    </Heading>
  </Box>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
