import React from "react";
import PropTypes from "prop-types";

import {
	Edit,
	EditHeader,
	EditOptions,
	EditOptionLink,
	EditMeta,
	EditImage,
	EditIngredientList,
	EditIngredient,
} from "./EditCard.styles";

const EditCardComponent = ({ name, image, ingredient }) => (
	<Edit>
		<EditHeader>
			<h2>{name}</h2>
			<EditOptions>
				<EditOptionLink>
					<a href="" title="">
						Add
					</a>
				</EditOptionLink>
				<EditOptionLink>
					<a href="" title="">
						Edit
					</a>
				</EditOptionLink>
				<EditOptionLink>
					<a href="" title="">
						Delete
					</a>
				</EditOptionLink>
			</EditOptions>
		</EditHeader>
		<EditMeta>
			<EditImage>
				<img src={image} alt="" />
			</EditImage>
			<EditIngredientList>
				<EditIngredient>{ingredient}</EditIngredient>
				<EditIngredient>{ingredient}</EditIngredient>
			</EditIngredientList>
		</EditMeta>
	</Edit>
);

EditCardComponent.description = "Edit component to edit existing recipe";

EditCardComponent.propTypes = {
	name: PropTypes.string.Required,
	image: PropTypes.string,
	ingredient: PropTypes.string,
};

export default EditCardComponent;
export { EditHeader, EditOptions, EditMeta, EditImage };
