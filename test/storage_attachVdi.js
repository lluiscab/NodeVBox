
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.attachVdi('addc8f49-2460-45db-a412-f5c288a90795', '/home/lluiscab/VirtualBox VMs/debian 8/debian 8_copy2.vdi')
	.then(() => {
		console.log('VDI attached');
	}).catch(error => {
		console.log(error);
	});