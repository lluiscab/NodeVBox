
	const execute = require('../lib/executeCommand');

	module.exports = (vm, gui) => {

		return new Promise((resolve, reject) => {

			let type = gui ? 'gui' : 'headless';

			execute(['-q', 'startvm', vm, '--type', type])
				.then((stdout, stderr) => {

					if(stdout.indexOf('has been successfully started.') > -1) {
						resolve();
					} else  {
						reject(stdout, stderr);
					}

				})
				.catch(error => {

					if (/VBOX_E_INVALID_OBJECT_STATE/.test(error)) {
						reject(new Error("VM Already started"));
					} else {
						reject(error);
					}

				});

		});

	};