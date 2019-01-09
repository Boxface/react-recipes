import React from "react";
import PropTypes from "prop-types";

import { Container } from "./PageContainer.styles.js";

const PageContainer = ({ children }) => <Container>{children}</Container>;

PageContainer.description = "Container for all content on page";

PageContainer.propTypes = {
	children: PropTypes.node,
};

export default PageContainer;
