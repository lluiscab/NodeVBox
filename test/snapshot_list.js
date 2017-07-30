
	const VBoxNode = require('../lib/main');

	VBoxNode.snapshots.list('addc8f49-2460-45db-a412-f5c288a90795')
	.then(list => {
		console.log(list);
	}).catch(error => {
		console.log(error);
	});