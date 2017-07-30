
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.resizeVdi('ce9065e7-86d9-44da-b393-8c5197dd6be0', 65000)
	.then(() => {
		console.log('VDI resized');
	}).catch(error => {
		console.log(error);
	});