
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, storagectl, device, port) => {

		return new Promise((resolve, reject) => {
			execute([
				'storageattach', vm,
				'--storagectl', storagectl,
				'--device', device,
				'--port', port,
				'--medium', '"none"'
			]).then(resolve).catch(reject);


		});

	};