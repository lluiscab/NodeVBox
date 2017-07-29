
	const execute = require('../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['controlvm', vm, 'savestate'])
				.then(resolve)
				.catch(error => {

					if(error.toString().indexOf('is not currently running') > -1) {
						reject(new Error("VM Not running"));
					} else {
						reject(error);
					}

				});

		});

	};