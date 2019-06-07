import React from "react";
import { storiesOf } from "@storybook/react";

import { Header } from "guild-js-theme";

import Cards from "./2.1.cards";
import Buttons from "./2.2.buttons";
import List from "./2.3.list";

storiesOf("Components", module)
  .add("Cards", () => <Cards />)
  .add("Buttons", () => <Buttons />)
  .add("List", () => <List />)
  .add("Header", () => <Header title="#guild-js-dev ❤" />);
