
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.attachISO('addc8f49-2460-45db-a412-f5c288a90795', '/home/lluiscab/IsoStorage/ubuntu-gnome-17.04-desktop-amd64.iso')
	.then(() => {
		console.log('Iso attached');
	}).catch(error => {
		console.log(error);
	});