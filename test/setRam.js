
	const VBoxNode = require('../lib/main');

	VBoxNode.setVmRam('addc8f49-2460-45db-a412-f5c288a90795', '1024').then(() => {
		console.log('Ram changed ;)');
	}).catch(error => {
		console.log(error);
	});