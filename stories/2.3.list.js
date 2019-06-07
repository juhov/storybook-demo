import React from "react";
import { List, Card } from "guild-js-theme";

const items = new Array(10).fill(<Card variant="flat" pb="15%" />);

export default () => <List itemWidth="20vw">{items}</List>;
