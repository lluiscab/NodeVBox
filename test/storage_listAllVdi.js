
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.listAllVdi().then(disks => {

		console.log(disks);

	}).catch(error => {
		console.log(error);
	});