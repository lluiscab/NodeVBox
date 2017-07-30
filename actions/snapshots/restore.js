
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, snapshot) => {

		return new Promise((resolve, reject) => {

			execute(['snapshot', vm, 'restore', snapshot]).then((stdout, stderr) => {

				if(stdout.toString().indexOf('Restoring') > -1) {
					resolve();
				} else {
					reject(stdout, stderr);
				}

			}).catch(error => {

				if(error.toString().indexOf('Could not find a snapshot') > -1) {
					reject(new Error("Snapshot not found"))
				} else {
					reject(error);
				}

			});

		});

	};