
	const VBoxNode = require('../lib/main');

	VBoxNode.version().then(version => {
		console.log(version);
	}).catch(error => {
		console.log(error);
	});