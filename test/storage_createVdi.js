
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.createVdi('/home/lluiscab/VirtualBox VMs/test.vdi', 16000)
	.then(() => {
		console.log('VDI created');
	}).catch(error => {
		console.log(error);
	});