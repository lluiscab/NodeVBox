
	const VBoxNode = require('../lib/main');

	VBoxNode.createVm('Test vm', 'Windows2003_64').then(uuid => {
		console.log('VM Created, uuid:', uuid);
	}).catch(error => {
		console.log(error);
	});