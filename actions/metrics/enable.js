
	const execute = require('../../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['metrics', 'enable', vm]).then(resolve).catch(reject);


		});

	};