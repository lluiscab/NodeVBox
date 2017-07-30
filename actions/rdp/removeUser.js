
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, username) => {

		return new Promise((resolve, reject) => {

			let VBoxAuthSimple = '"VBoxAuthSimple/users/' + username +'"';

			execute(['setextradata', vm, VBoxAuthSimple]).then(resolve).catch(reject)

		});

	};