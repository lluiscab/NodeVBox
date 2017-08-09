
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, type) => {

		return new Promise((resolve, reject) => {

			execute(['modifyvm', '"' + vm  + '"', '--vrdeauthtype', type]).then((string, stderr) => {
				resolve();
			}).catch(reject);

		});

	};