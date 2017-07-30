
	const VBoxNode = require('../lib/main');

	VBoxNode.rdp.setRdpStatus('addc8f49-2460-45db-a412-f5c288a90795', true).then(() => {
		console.log('RDP Enabled');
	}).catch(error => {
		console.log(error);
	});