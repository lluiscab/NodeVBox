
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.detachVdi('addc8f49-2460-45db-a412-f5c288a90795', 'SATA', 0, 0)
	.then(() => {
		console.log('Detached device on SATA controller, port 0, device 0');
	}).catch(error => {
		console.log(error);
	});