
	const VBoxNode = require('../lib/main');

	VBoxNode.storage.listMounted('addc8f49-2460-45db-a412-f5c288a90795').then(controllers => {

		controllers.forEach(controller => {

			console.log('\n', controller.name, controller.type,
				'Ports:', controller.port_count + '/' + controller.max_port_count);

			if(controller.drives) {

				controller.drives.forEach(drive => {

					console.log('  ', drive.port, drive.device);

					if(drive.empty) {
						console.log('     Drive empty');
					} else {
						console.log('    ', drive.path);
						console.log('    ', drive.uuid);
						console.log('    ', drive.type);
						console.log('    ', drive.format);
						console.log('    ', drive.size + ' / ' + drive.totalSize);
					}

				});

			}

		});

	}).catch(error => {
		console.log(error);
	});