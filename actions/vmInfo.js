
	const execute = require('../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['showvminfo', '"' + vm + '"']).then(stdout => {

				let info = [];

				let regex = /^(.*?):\s+(.*)$/gim;
				let match;

				while (match = regex.exec(stdout)) {

					if (match.index === regex.lastIndex) {
						regex.lastIndex++;
					}

					// Trim
					let varname = match[1].trim().toLowerCase().replace(/ /g, '_');
					let value = match[2].trim();

					info[varname] = value;

				}

				resolve(info);

			}).catch(reject);


		});

	};