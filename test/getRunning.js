
	const VBoxNode = require('../lib/main');

	VBoxNode.getRunning().then(running => {
		console.log(running);
	}).catch(error => {
		console.log(error);
	});