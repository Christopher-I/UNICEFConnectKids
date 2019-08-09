const routes = require("next-routes")();

routes
	.add("/", "/home")
	.add("/isp/:address", "/isp/show")
	.add("/school/:address", "/school/show")
	.add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
