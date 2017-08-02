
	const VBoxNode = require('../lib/main');

	// Note: Clone might take some minutes

	VBoxNode.setBootOrder('addc8f49-2460-45db-a412-f5c288a90795', 'dvd', 'disk').then(() => {

		console.log('Boot order changed');

	}).catch(error => {
		console.log(error);
	});