
	const execute = require('../lib/executeCommand');

	module.exports = (name, type) => {

		return new Promise((resolve, reject) => {

			execute(['createvm',
				'--name', '"' + name + '"',
				'--ostype', '"' + type + '"',
				' --register'
			])
				.then((stdout, stderr) => {

					let match = /^UUID: (.*)/gm.exec(stdout);

					if(match) {
						resolve(match[1]);
					} else {
						reject(stdout, stderr)
					}

				})
				.catch(error => {

					if(error.toString().indexOf('already exists') > -1) {
						reject(new Error("VM Name taken"));
					} else {
						reject(error);
					}

				});

		});

	};