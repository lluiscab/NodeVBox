
	const VBoxNode = require('../lib/main');

	VBoxNode.snapshots.delete('addc8f49-2460-45db-a412-f5c288a90795', '67668f8a-3850-4604-afdc-680e2a66cb4d')
	.then(() => {
		console.log('Deleted');
	}).catch(error => {
		console.log(error);
	});