
	const VBoxNode = require('../lib/main');

	VBoxNode.vmInfo('addc8f49-2460-45db-a412-f5c288a90795').then(info => {
		console.log(info);
	}).catch(error => {
		console.log(error);
	});