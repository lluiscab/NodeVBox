
	const VBoxNode = require('../lib/main');

	VBoxNode.metrics.disable('addc8f49-2460-45db-a412-f5c288a90795').then(() => {
		console.log('Metric disabled for this vm');
	}).catch(error => {
		console.log(error);
	});