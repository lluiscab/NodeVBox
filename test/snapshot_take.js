
	const VBoxNode = require('../lib/main');

	VBoxNode.snapshots.take('addc8f49-2460-45db-a412-f5c288a90795', 'snapshotName', 'snapshotDesc')
	.then(uuid => {
		console.log('Snapshot taken with UUID:', uuid);
	}).catch(error => {
		console.log(error);
	});