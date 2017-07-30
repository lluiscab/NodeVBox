
	const execute = require('../../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['metrics', 'disable', vm]).then(resolve).catch(reject);


		});

	};