
	const VBoxNode = require('../lib/main');

	VBoxNode.rdp.listUsers('addc8f49-2460-45db-a412-f5c288a90795').then(users => {
		console.log(users);
	}).catch(error => {
		console.log(error);
	});