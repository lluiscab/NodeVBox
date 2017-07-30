
	const VBoxNode = require('../lib/main');

	VBoxNode.metrics.get('addc8f49-2460-45db-a412-f5c288a90795').then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});