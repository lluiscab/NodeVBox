
	const execute = require('../lib/executeCommand');

	module.exports = (vm, ram) => {

		return new Promise((resolve, reject) => {

			execute([
				'modifyvm', '"' + vm + '"',
				'--memory', ram
			]).then(resolve).catch(error => {

				if(error.toString().indexOf('is already locked') > -1) {
					reject(new Error("VM Running"));
				} else {
					reject(error);
				}

			});

		});

	};