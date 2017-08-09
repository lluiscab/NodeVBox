
	const VBoxNode = require('../lib/main');

	VBoxNode.systemProps().then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});