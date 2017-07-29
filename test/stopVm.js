
	const VBoxNode = require('../lib/main');

	VBoxNode.stop('addc8f49-2460-45db-a412-f5c288a90795').then(() => {
		console.log('VM Stopped');
	}).catch(error => {
		console.log(error);
	});