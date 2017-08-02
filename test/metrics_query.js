
	const VBoxNode = require('../lib/main');

	VBoxNode.metrics.query('Ubuntu server - Node 1').then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});