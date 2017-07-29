
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, username, password) => {

		return new Promise((resolve, reject) => {

			execute(['getextradata', vm, 'enumerate'])
				.then((stdout, stderr) => {

					let users = [];

					let regex = /^Key: VBoxAuthSimple\/users\/(.+?(?=,)), Value: (.*)/gm;
					let match;

					while ((match = regex.exec(stdout)) !== null) {

						if (match.index === regex.lastIndex) {
							regex.lastIndex++;
						}

						users.push(match[1]);

					}

					resolve(users);

				})
				.catch(reject);

		});

	};