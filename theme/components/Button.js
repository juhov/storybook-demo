import { Button as _Button } from "rebass";
import { styled } from "guild-js-theme";

const Button = styled(_Button)`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 14em;
  min-height: 2.5em;
  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  as: "button",
  variant: "default"
};

export default Button;
