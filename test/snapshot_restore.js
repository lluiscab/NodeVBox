
	const VBoxNode = require('../lib/main');

	VBoxNode.snapshots.restore('addc8f49-2460-45db-a412-f5c288a90795', '93748586-a6b9-4d4d-9f38-3ef4939d2f62')
	.then(() => {
		console.log('Restored');
	}).catch(error => {
		console.log(error);
	});