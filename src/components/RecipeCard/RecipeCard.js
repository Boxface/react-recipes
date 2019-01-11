import React from "react";
import PropTypes from "prop-types";

import {
	Recipe,
	RecipeHeader,
	RecipeOptions,
	RecipeOptionLink,
	RecipeMeta,
	RecipeImage,
	RecipeIngredientList,
	RecipeIngredient,
} from "./RecipeCard.styles";

const RecipeCardComponent = ({ name, image, ingredient }) => (
	<Recipe>
		<RecipeHeader>
			<h2>{name}</h2>
			<RecipeOptions>
				<RecipeOptionLink>
					<a href="" title="">
						Edit
					</a>
				</RecipeOptionLink>
				<RecipeOptionLink>
					<a href="" title="">
						Delete
					</a>
				</RecipeOptionLink>
			</RecipeOptions>
		</RecipeHeader>
		<RecipeMeta>
			<RecipeImage>
				<img src={image} alt="" />
			</RecipeImage>
			<RecipeIngredientList>
				<RecipeIngredient>{ingredient}</RecipeIngredient>
				<RecipeIngredient>{ingredient}</RecipeIngredient>
			</RecipeIngredientList>
		</RecipeMeta>
	</Recipe>
);

RecipeCardComponent.description = "Individual recipe";

RecipeCardComponent.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string,
	ingredient: PropTypes.string.isRequired,
};

export default RecipeCardComponent;
export { RecipeHeader, RecipeOptions, RecipeMeta, RecipeImage };
