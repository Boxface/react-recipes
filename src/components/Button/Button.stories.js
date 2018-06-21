/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
	.add("Primary Button", () => <Button>Primary Button</Button>)
	.add("Secondary Button", () => (
		<Button variant="secondary">Secondary button</Button>
	));
