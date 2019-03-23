import React from "react";
import PropTypes from "prop-types";

import { Container } from "./CardContainer.styles.js";

const CardContainer = ({ children }) => <Container>{children}</Container>;

CardContainer.description = "Container for all content on page";

CardContainer.propTypes = {
	children: PropTypes.node,
};

export default CardContainer;
