
	const execute = require('../../lib/executeCommand');

	module.exports = (disk, newSize) => {

		return new Promise((resolve, reject) => {

			execute([
				'modifyhd', '"' + disk + '"',
				'--resize', newSize
			]).then(resolve).catch(reject);


		});

	};