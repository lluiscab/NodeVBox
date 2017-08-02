
	const execute = require('../../lib/executeCommand');


	module.exports = (vm, path, _storagectl, _device, _port) => {

		return new Promise((resolve, reject) => {

			let device = _device || 0;
			let port = _port || 0;
			let storagectl = _storagectl || 'IDE';

			execute([
				'storageattach', '"' + vm + '"',
				'--storagectl', '"'+ storagectl + '"',
				'--device', device,
				'--port', port,
				'--type', 'dvddrive',
				'--medium', '"' + path + '"'
			]).then(resolve).catch(error =>  {

				if(error.toString().indexOf('Could not find a controller named')) {
					reject(new Error("Storage controller not found"));
				} else {
					reject(error)
				}

			});


		});

	};