
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, port) => {

		return new Promise((resolve, reject) => {

			execute(['modifyvm', vm, '--vrdeport', port]).then(resolve).catch(error => {

				if(/VBOX_E_INVALID_OBJECT_STATE/.test(error)) {
					reject(new Error("VM is running"))
				} else {
					reject(error);
				}

			});

		});

	};