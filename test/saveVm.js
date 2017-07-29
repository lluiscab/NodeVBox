
	const VBoxNode = require('../lib/main');

	VBoxNode.save('addc8f49-2460-45db-a412-f5c288a90795').then(() => {
		console.log('VM state saved!');
	}).catch(error => {
		console.log(error);
	});