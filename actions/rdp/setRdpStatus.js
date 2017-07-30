
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, status) => {

		return new Promise((resolve, reject) => {

			let on = status ? 'on' : 'off';

			execute(['modifyvm', vm, '--vrde', on]).then(resolve).catch(error => {

				if(/VBOX_E_INVALID_OBJECT_STATE/.test(error)) {
					reject(new Error("VM is running"))
				} else {
					reject(error);
				}

			});

		});

	};