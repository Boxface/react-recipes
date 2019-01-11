import styled from "styled-components";

export const Edit = styled.div`
	border-radius: var(--radius-large);
	border: 2px solid #000;
	font-family: Arial;
	font-size: 1em;
	padding: var(--padding-medium) var(--padding-large);
	margin-bottom: var(--padding-medium);
`;

export const EditHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const EditOptions = styled.ul`
	display: flex;
	flex-direction: row;
`;

export const EditOptionLink = styled.li`
	margin-left: 10px;
`;

export const EditMeta = styled.div`
	display: flex;
`;

export const EditImage = styled.div`
	flex-basis: 50%;
	margin-right: 20px;
`;

export const EditIngredientList = styled.ul`
	flex-basis: 50%;
`;

export const EditIngredient = styled.li``;
