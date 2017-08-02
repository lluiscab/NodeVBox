
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

						let uuid = match[1];
						execute([
							'storagectl', uuid,
							'--name', '"SATA"',
							'--add', 'sata',
							'--controller', 'IntelAHCI'
						]).then(() => {

							execute([
								'storagectl', uuid,
								'--name', '"IDE"',
								'--add', 'ide'
							]).then(() => {
								resolve(uuid);
							}).catch(reject);

						}).catch(reject);

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