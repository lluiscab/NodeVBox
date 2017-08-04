
	const VBoxNode = require('../lib/main');
	const path = require('path');

	VBoxNode.screenshot('addc8f49-2460-45db-a412-f5c288a90795', path.join(process.cwd(), '../screenshot.png')).then(uuid => {
		console.log('VM Created, uuid:', uuid);
	}).catch(error => {
		console.log(error);
	});