
	const execute = require('../../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['showvminfo', '"' + vm +'"']).then(stdout => {

				let controllers = [];

				let regex = /^Storage Controller ([^(]*)\(([0-9])\):\s*(.*)/gm;
				let match;

				while ((match = regex.exec(stdout)) !== null) {

					if (match.index === regex.lastIndex) {
						regex.lastIndex++;
					}

					if(!controllers[match[2]]) controllers[match[2]] = {
						index: parseInt(match[2])
					};

					let varname = match[1].trim().toLowerCase().replace(/ /g, '_');
					let value = match[3].trim().toLowerCase();

					if(varname === 'instance_number' || varname === 'port_count' || varname === 'max_port_count') {
						value = parseInt(value);
					}

					if(varname === 'bootable') {
						value = value === 'on';
					}

					controllers[match[2]][varname] = value;

				}

				if(controllers.length) {

					Promise.all(controllers.map(controller => {
						return new Promise((resolve, reject) => {

							controller.drives = [];

							// Find drives on the controller

							let name = controller.name.toUpperCase();

							let regex = new RegExp('^' + name + ' \\(([0-9]), ([0-9])\\): (.*)', 'gm');
							let match;

							while ((match = regex.exec(stdout)) !== null) {

								if (match.index === regex.lastIndex) {
									regex.lastIndex++;
								}

								let disk = {
									port: match[1],
									device: match[2]
								};

								let path = match[3];

								if(path === 'Empty') {
									disk.empty = true;
								} else {

									let pathRegex = /^(.+?(?= \(UUID: )) \(UUID: ([^\)]*)\)/gm;

									let pathMatch = pathRegex.exec(path);

									if(pathMatch)  {

										disk.empty = false;
										disk.path = pathMatch[1];
										disk.type = pathMatch[1].split('.').slice(1).join('.');
										disk.uuid = pathMatch[2];

									} else {
										disk.empty = true;
									}

								}

								controller.drives.push(disk);

							}

							if(controller.drives.length) {

								Promise.all(controller.drives.map(drive => {
									return new Promise((resolve, reject) => {

										if(drive.empty) {
											resolve(drive);
										} else {

											execute(['showmediuminfo', drive.uuid]).then((stdout, stderr) =>  {

												if(stderr) {
													reject(stderr)
												} else {

													const regex = /^Location:\s*(.*)\nStorage format:\s*(.*)\nFormat variant:\s*(.*)\nCapacity:\s*(.*)\nSize on disk: \s*(.*)\n/gm;

													let match = regex.exec(stdout);

													if(match) {
														drive.type = match[2];
														drive.format = match[3];
														drive.totalSize = match[4];
														drive.size = match[5];
														resolve(drive);
													} else {
														resolve(drive);
													}


												}

											}).catch(error => {

												if(error.toString().indexOf('is not fully qualified') > -1) {
													resolve(drive);
												} else {
													reject(error);
												}

											});

										}

									});
								})).then(drives => {
									controller.drives = drives;
									resolve(controller);
								}).catch(reject);

							} else {
								resolve(controller);
							}


						});
					})).then(resolve);

				} else {
					resolve(controllers);
				}



			}).catch(reject);


		});

	};