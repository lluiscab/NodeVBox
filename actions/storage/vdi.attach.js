
	const execute = require('../../lib/executeCommand');

	module.exports = (vm, path, _storagectl, _device, _port) => {

		return new Promise((resolve, reject) => {

			let device = _device || 0;
			let port = _port || 0;
			let storagectl = _storagectl || 'SATA';

			execute([
				'storageattach', vm,
				'--storagectl', storagectl,
				'--device', device,
				'--port', port,
				'--type', 'hdd',
				'--medium', '"' + path + '"'
			]).then(resolve).catch(error => {

				if(error.toString().indexOf('can\'t be used as the requested device') > -1) {
					reject(new Error("Medium can't be used as hdd"));
				} else {
					reject(error);
				}

			});


		});

	};