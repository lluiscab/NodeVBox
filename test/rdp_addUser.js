
	const VBoxNode = require('../lib/main');

	VBoxNode.rdp.addUser('addc8f49-2460-45db-a412-f5c288a90795', 'testUser', 'password')
	.then(() => {
		console.log('User added');
	}).catch(error => {
		console.log(error);
	});