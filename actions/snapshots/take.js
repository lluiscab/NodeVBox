
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, name, desc) => {

		return new Promise((resolve, reject) => {

			let description = desc ? '--description ' + desc : null;

			execute(['snapshot', vm, 'take', name, description]).then((stdout, stderr) => {

				let match = /^Snapshot taken. UUID: (.*)/.exec(stdout);

				if(match) {
					resolve(match[1]);
				} else {
					reject(stdout, stderr);
				}

			}).catch(reject);

		});

	};