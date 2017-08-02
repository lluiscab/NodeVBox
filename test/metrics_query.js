
	const VBoxNode = require('../lib/main');

	VBoxNode.metrics.query('82b0b2b1-05c1-4dc0-8047-8e0c4c15f1ea').then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});