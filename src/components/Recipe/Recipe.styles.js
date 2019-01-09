import styled from "styled-components";

export const Recipe = styled.div`
	border-radius: var(--radius-large);
	border: 2px solid #000;
	font-family: Arial;
	font-size: 1em;
	padding: var(--padding-medium) var(--padding-large);
	margin-bottom: var(--padding-medium);
`;

export const RecipeHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const RecipeOptions = styled.ul`
	display: flex;
	flex-direction: row;
`;

export const RecipeOptionLink = styled.li`
	margin-left: 10px;
`;

export const RecipeMeta = styled.div`
	display: flex;
`;

export const RecipeImage = styled.div`
	flex-basis: 50%;
	margin-right: 20px;
`;

export const RecipeIngredientList = styled.ul`
	flex-basis: 50%;
`;

export const RecipeIngredient = styled.li``;
