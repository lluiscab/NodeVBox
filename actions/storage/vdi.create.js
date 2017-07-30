
	const execute = require('../../lib/executeCommand');

	module.exports = (path, size) => {

		return new Promise((resolve, reject) => {

			execute([
				'createhd',
				'--filename', '"' + path + '"',
				'--size', size
			]).then(resolve).catch(reject);

		});

	};