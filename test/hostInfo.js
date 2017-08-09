
	const VBoxNode = require('../lib/main');

	VBoxNode.hostInformation().then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});