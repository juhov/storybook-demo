import React from "react";

import { Flex, Button } from "guild-js-theme";

export default () => (
  <>
    <Flex mb={1}>
      <Button mr={1}>Default</Button>
      <Button mr={1} as="a">
        As link
      </Button>
      <Button disabled mr={1}>
        Disabled
      </Button>
    </Flex>
    <Flex mb={1}>
      <Button variant="primary" mr={1}>
        Primary
      </Button>
      <Button variant="primary" mr={1} as="a">
        As link
      </Button>
      <Button variant="primary" disabled mr={1}>
        Primary
      </Button>
    </Flex>
  </>
);
