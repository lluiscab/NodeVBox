
	const VBoxNode = require('../lib/main');

	VBoxNode.rdp.setPort('addc8f49-2460-45db-a412-f5c288a90795', 8080).then(() => {
		console.log('Port changed ok');
	}).catch(error => {
		console.log(error);
	});