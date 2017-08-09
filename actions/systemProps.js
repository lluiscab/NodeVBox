
	const execute = require('../lib/executeCommand');

	module.exports = () => {

		return new Promise((resolve, reject) => {

			execute(['list', 'systemproperties']).then(stdout => {

				let info = {};

				let regex = /^([^:]*):(.*)/gm;
				let match;

				while ((match = regex.exec(stdout)) !== null) {

					if (match.index === regex.lastIndex) {
						regex.lastIndex++;
					}

					let name = match[1]
						.toLowerCase()
						.replace(/\r?\n|\r/, '')
						.replace(/ /g, '_')
						.replace(/-/g, '_')
						.replace(/#/g, '_')
						.replace(/\(/g, '_')
						.replace(/\)/g, '_');
					info[name] = match[2].trim();
				}

				resolve(info);

			}).catch(reject);

		});

	};