
	const VBoxNode = require('../lib/main');

	VBoxNode.isRunning('addc8f49-2460-45db-a412-f5c288a90795').then(running => {
		console.log(running);
	}).catch(error => {
		console.log(error);
	});