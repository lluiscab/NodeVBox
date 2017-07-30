
	const VBoxNode = require('../lib/main');

	VBoxNode.metrics.enable('addc8f49-2460-45db-a412-f5c288a90795').then(() => {
		console.log('Metric enabled for this vm');
	}).catch(error => {
		console.log(error);
	});