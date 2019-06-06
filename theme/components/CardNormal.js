import React from "react";
import { Text, Card, styled } from "guild-js-theme";
import { intrinsicRatio } from "guild-js-theme/styled-system-utils/intrinsicRatio";

const ImageWrapper = styled(Img)`
  ${intrinsicRatio};
`;

const Card = ({ image, title, subtitle, ...rest }) => {
  return (
    <Card variant="default" {...rest}>
      {image && (
        <ImageWrapper intrinsicRatio={{ width: 300, height: 430 }}>
          <img src={image} />
        </ImageWrapper>
      )}
      <Box p={1}>
        <Text as="h2" m={0}>
          {title}
        </Text>
        {subtitle && (
          <Text as="h3" color="breakerBay" m={0}>
            {subtitle}
          </Text>
        )}
      </Box>
    </Card>
  );
};

export default HousemateCard;
