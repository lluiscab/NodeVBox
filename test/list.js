
	const VBoxNode = require('../lib/main');

	VBoxNode.list().then(vms => {
		console.log(vms);
	}).catch(error => {
		console.log(error);
	});