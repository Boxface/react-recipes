import React, { Component } from "react";

import PageContainer from "./components/containers/PageContainer/PageContainer";

import HeaderComponent from "./components/Header/Header";
import RecipeCardComponent from "./components/RecipeCard/RecipeCard";

class App extends Component {
	render() {
		return (
			<div id="App">
				<HeaderComponent>
					<h1>Header component</h1>
					<p>TODO - Add button</p>
				</HeaderComponent>
				<PageContainer>
					<RecipeCardComponent
						name="Katsu Curry"
						image="https://foodscene.deliveroo.co.uk/assets/images/blogs/foodscene.deliveroo.co.uk/en/cuisine-inspiration/1VP8qCuBL71rpsb9bQ8g8pDD5T6ds77raI4g10yP_vEM/h_katsu_curry_cropped.jpg?v=1.01"
						ingredient="Garram Masalla"
					/>
				</PageContainer>
			</div>
		);
	}
}

export default App;
