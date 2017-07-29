
	const execute = require('../../lib/executeCommand');


	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['setproperty', 'vrdeauthlibrary', 'VBoxAuthSimple'])
				.then(resolve)
				.catch(reject);

		});

	};