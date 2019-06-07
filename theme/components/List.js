import PropTypes from "prop-types";
import { Flex, styled, themeGet } from "guild-js-theme";

const List = styled(Flex)`
  padding-right: ${themeGet("space.1")};
  overflow: scroll;
  &:after {
    content: "";
    display: block;
    flex: 0 0 ${themeGet("space.1")};
  }
  > * {
    flex: 0 0 ${props => props.itemWidth || "18em"};
    margin-right: ${themeGet("space.1")};
    @media screen and (min-width: ${themeGet(`breakpoints.1`)}) {
      margin-right: ${themeGet("space.2")};
    }
  }
`;

List.propTypes = {
  itemWidth: PropTypes.string
};

export default List;
