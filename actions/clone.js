
	const execute = require('../lib/executeCommand');

	module.exports = (vmToClone, newVmName) => {

		return new Promise((resolve, reject) => {

			execute(['clonevm', vmToClone, '--name', '"' + newVmName + '"', '--register']).then((stdout, stderr) => {

				if(stdout.indexOf('successfully cloned') > -1) {
					resolve()
				} else {
					reject(stdout, stderr)
				}

			}).catch(reject);


		});

	};