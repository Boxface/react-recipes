/* global module */
const rewireStyledComponents = require("react-app-rewire-styled-components");

const options = {
	fileName: false,
};

module.exports = (config, env) => rewireStyledComponents(config, env, options);
