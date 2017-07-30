
	const execute = require('../lib/executeCommand');

	module.exports = () => {

		return new Promise((resolve, reject) => {

			execute(['--version']).then(resolve).catch(reject);

		});

	};