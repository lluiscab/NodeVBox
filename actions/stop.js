
	const execute = require('../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['controlvm', vm, 'poweroff'])
				.then(resolve)
				.catch(error => {

					if (/is not currently running/.test(error)) {
						reject(new Error("VM Not started"));
					} else  {
						reject(error);
					}

				});

		});

	};