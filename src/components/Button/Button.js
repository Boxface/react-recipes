import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./Button.styles.js";

const Button = ({ variant, children, ...props }) => (
	<StyledButton className={`Button ${variant}`} type="button" {...props}>
		<span className="Button-text-wrapper">
			{children && <span className="Button-text">{children}</span>}
		</span>
	</StyledButton>
);

Button.description = "A button";

Button.propTypes = {
	variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
	children: PropTypes.string,
};

Button.defaultProps = {
	variant: "primary",
};

export default Button;
