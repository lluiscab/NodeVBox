
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.listMounted('addc8f49-2460-45db-a412-f5c288a90795').then(controllers => {

		controllers.forEach(controller => {

			console.log('\n', controller.name, controller.type,
				'Ports:', controller.port_count + '/' + controller.max_port_count);

			controller.drives.forEach(drive => {

				console.log('  ', drive.port, drive.subPort);

				if(drive.empty) {
					console.log('     Drive empty');
				} else {
					console.log('    ', drive.path);
					console.log('    ', drive.uuid);
				}

			});

		});

	}).catch(error => {
		console.log(error);
	});