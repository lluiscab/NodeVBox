
	const execute = require('../lib/executeCommand');

	module.exports = (vm, _boot1, _boot2, _boot3, _boot4) => {

		return new Promise((resolve, reject) => {

			let boot1 = _boot1 || 'none';
			let boot2 = _boot2 || 'none';
			let boot3 = _boot3 || 'none';
			let boot4 = _boot4 || 'none';

			execute([
				'modifyvm', '"' + vm + '"',
				'--boot1', boot1,
				'--boot2', boot2,
				'--boot3', boot3,
				'--boot4', boot4
			]).then(resolve).catch(reject);

		});

	};