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
} from "./Recipe.styles";

const RecipeComponent = ({ name, image, ingredient }) => (
	<Recipe>
		<RecipeHeader>
			<h2>{name}</h2>
			<RecipeOptions>
				<RecipeOptionLink>
					<a href="" title="">
						Add
					</a>
				</RecipeOptionLink>
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

RecipeComponent.description = "Individual recipe";

RecipeComponent.propTypes = {
	name: PropTypes.string.Required,
	image: PropTypes.string,
	ingredient: PropTypes.string,
};

export default RecipeComponent;
export { RecipeHeader, RecipeOptions, RecipeMeta, RecipeImage };
