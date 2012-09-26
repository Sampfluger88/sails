// lift sails                                                                                                          
require('sails').lift({
	// Name of the application (for HTML title entity)
	appName: "Name of your application",

	// Path to application root (usually __dirname)
	appPath: __dirname,

	// The environment the app is deployed in
	appEnvironment: 'development',

	// The datasource configuration
	// (for larger teams, this can be externalized into a separate config file 
	// to avoid version control collisions)
	datasource: {
		database: 'nameOfYourMySQLDatabase',
		username: 'usernameForYourMySQLInstallation',
		password: 'passwordForYourMySQLInstallation'
	},
	
	// Default URL mappings
	mappings: {
		'/': {
			controller:'meta',
			action:'home'
		},
		'/500': {
			controller:'meta',
			action:'error'
		},
		'/404': {
			controller:'meta',
			action:'notfound'
		},
		'/403': {
			controller:'meta',
			action:'denied'
		}
	},

	// Whether to use built-in Mast integration through the Rigging library
	rigging: false
});