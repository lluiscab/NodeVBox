
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, snapshot) => {

		return new Promise((resolve, reject) => {

			execute(['snapshot', vm, 'delete', snapshot]).then(resolve).catch(error => {

				if(error.toString().indexOf('because it is the current snapshot') > -1) {
					reject(new Error("Can't delete current snapshot!"))
				} else if(error.toString().indexOf('Could not find a snapshot with') > -1) {
					reject(new Error("Snapshot not found!"));
				} else {
					reject(error);
				}

			});

		});

	};