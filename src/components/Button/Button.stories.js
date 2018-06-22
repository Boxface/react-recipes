/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";

import { PrimaryButton, SecondaryButton } from "./Button";

storiesOf("Buttons", module)
	.add("Primary Button", () => <PrimaryButton>Primary Button</PrimaryButton>)
	.add("Secondary Button", () => (
		<SecondaryButton>Secondary button</SecondaryButton>
	));
