
	const VBoxNode = require('../lib/main');

	// Note: Clone might take some minutes

	VBoxNode.clone('addc8f49-2460-45db-a412-f5c288a90795', 'myNewVM').then(() => {

		console.log('Cloned');

	}).catch(error => {
		console.log(error);
	});