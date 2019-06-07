import { Box, styled } from "guild-js-theme";

export const PageContainer = styled(Box)``;

PageContainer.defaultProps = {
  py: 2,
  px: [1, 2, 3]
};

export const PageContainerBreakOut = styled(Box)``;

PageContainerBreakOut.defaultProps = {
  mx: [-1, -2, -3],
  px: [1, 2, 3]
};
