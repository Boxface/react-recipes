import React, { Component } from "react";

import "./index.css";

import CardContainer from "./components/containers/CardContainer/CardContainer";

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
				<CardContainer>
					<RecipeCardComponent
						name="Katsu Curry"
						ingredient="Garram Masalla"
					/>
					<RecipeCardComponent
						name="Katsu Curry"
						ingredient="Garram Masalla"
					/>
					<RecipeCardComponent
						name="Katsu Curry"
						ingredient="Garram Masalla"
					/>
					<RecipeCardComponent
						name="Katsu Curry"
						ingredient="Garram Masalla"
					/>
					<RecipeCardComponent
						name="Katsu Curry"
						ingredient="Garram Masalla"
					/>
				</CardContainer>
			</div>
		);
	}
}

export default App;
