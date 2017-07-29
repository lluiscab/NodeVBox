
	const VBoxNode = require('../lib/main');

	VBoxNode.rdp.enableRdpAuth().then(() => {
		console.log('VBoxAuthSimple enabled');
	}).catch(error => {
		console.log(error);
	});