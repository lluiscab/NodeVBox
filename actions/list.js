
	const execute = require('../lib/executeCommand');

	module.exports = () => {

		return new Promise((resolve, reject) => {

			execute(['list', 'vms']).then((stdout, stderr) => {

					let vms = [];

					if (stdout.length) {

						let regex = /^"(.+?(?="))" {(.+?(?=}))/gm;
						let match;

						while ((match = regex.exec(stdout)) !== null) {

							if (match.index === regex.lastIndex) {
								regex.lastIndex++;
							}

							vms.push({
								name: match[1],
								uuid: match[2]
							})

						}

						resolve(vms);

					} else {
						resolve(vms);
					}

				}).catch(reject);


		});

	};