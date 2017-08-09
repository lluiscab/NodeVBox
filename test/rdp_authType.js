
	const VBoxNode = require('../lib/main');

	VBoxNode.rdp.authType('addc8f49-2460-45db-a412-f5c288a90795', 'external')
	.then(() => {
		console.log('Changed');
	}).catch(error => {
		console.log(error);
	});