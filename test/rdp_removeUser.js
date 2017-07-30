
	const VBoxNode = require('../lib/main');

	VBoxNode.rdp.removeUser('addc8f49-2460-45db-a412-f5c288a90795', 'testUser')
	.then(() => {
		console.log('User removed');
	}).catch(error => {
		console.log(error);
	});