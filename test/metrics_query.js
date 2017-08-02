
	const VBoxNode = require('../lib/main');

	VBoxNode.metrics.query('windows 7').then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});