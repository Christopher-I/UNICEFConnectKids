const routes = require("next-routes")();

routes
	.add(
		"/ApplicationForms/schoolApplication",
		"/ApplicationForms/schoolApplication"
	)
	.add("/ApplicationForms/ISPApplication", "/ApplicationForms/ISPApplication")
	.add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
