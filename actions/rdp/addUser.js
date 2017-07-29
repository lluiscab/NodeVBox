
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, username, password) => {

		return new Promise((resolve, reject) => {

			execute(['internalcommands', 'passwordhash', password]).then((string, stderr) => {

				let match = /^Password hash: (.*)/.exec(string);

				if(match) {

					let hashed = match[1];
					let VBoxAuthSimple = '"VBoxAuthSimple/users/' + username +'"';

					execute(['setextradata', vm, VBoxAuthSimple, hashed]).then((stdout, stderr) => {
						resolve();
					}).catch(reject)

				} else {
					reject(string, stderr);
				}

			}).catch(reject);

		});

	};