import styled from "styled-components";

const StyledButton = styled.button.attrs({
	type: "button",
})`
	border-radius: var(--radius-large);
	border-width: 2px;
	border-style: solid;
	cursor: pointer;
	font-family: Arial;
	font-size: 1em;
	padding: var(--padding-medium) var(--padding-large);
	transition: background-color var(--transition-button),
		color var(--transition-button);
	user-select: none;
`;

export const PrimaryButton = StyledButton.extend`
	background: var(--color-red);
	border-color: var(--color-red);
	color: var(--color-white);
	&:hover {
		background-color: var(--color-white);
		border-color: var(--color-red);
		color: var(--color-red);
	}
	&:focus {
		background-color: var(--color-white);
		border-color: var(--color-red-dark);
		color: var(--color-red-dark);
	}
`;

export const SecondaryButton = StyledButton.extend`
	background: var(--color-grey);
	border-color: var(--color-grey);
	color: var(--color-white);
	&:hover {
		background-color: var(--color-white);
		border-color: var(--color-grey);
		color: var(--color-grey);
	}
	&:focus {
		background-color: var(--color-white);
		border-color: var(--color-grey-dark);
		color: var(--color-grey-dark);
	}
`;
