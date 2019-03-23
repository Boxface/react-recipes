import styled from "styled-components";

export const Recipe = styled.div`
	background: url("https://foodscene.deliveroo.co.uk/assets/images/blogs/foodscene.deliveroo.co.uk/en/cuisine-inspiration/1VP8qCuBL71rpsb9bQ8g8pDD5T6ds77raI4g10yP_vEM/h_katsu_curry_cropped.jpg?v=1.01") no-repeat 50% 50% transparent;
	background-size: cover;
	flex-basis: 100%;
	font-family: Arial;
	font-size: 1em;
	min-height: 200px;
	padding: 25px;

	@media (min-width: 640px) {
    	flex-basis: 50%;
  	}

	@media (min-width: 768px) {
    	flex-basis: calc(100% / 3);
  	}

	@media (min-width: 1024px) {
    	flex-basis: 25%;
  	}

`;

export const RecipeHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;

	h2 {
		background: rgba(255,255,255, 0.7);
		padding: 10px;
	}

`;

export const RecipeOptions = styled.ul`
	display: flex;
	flex-direction: row;
`;

export const RecipeOptionLink = styled.li`
	background: rgba(255,255,255, 0.7);
	margin-left: 5px;
	padding: 10px;
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
	text-align: center;
`;

export const RecipeIngredient = styled.li`
	background: rgba(255,255,255, 0.7);
	padding: 10px;
	margin-bottom: 5px;
`;
