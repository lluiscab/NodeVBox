
	const execute = require('../../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['showvminfo', vm]).then(stdout => {

				let drives = [];

				let regex = /^Storage Controller ([^(]*)\(([0-9])\):\s*(.*)/gm;
				let match;

				while ((match = regex.exec(stdout)) !== null) {

					if (match.index === regex.lastIndex) {
						regex.lastIndex++;
					}

					if(!drives[match[2]]) drives[match[2]] = {
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


					drives[match[2]][varname] = value

				}

				if(drives.length) {

					drives.forEach(drive => {

						let name = drive.name.toUpperCase();

						drive.drives = [];

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

								let pathRegex = /^(.+?(?= \(UUID: )) \(UUID: ([^\)]*)\)/gm

								let pathMatch = pathRegex.exec(path);

								if(pathMatch)  {

									disk.empty = false;
									disk.path = pathMatch[1];
									disk.uuid = pathMatch[2];

								} else {
									disk.empty = true;
								}

							}

							drive.drives.push(disk);

						}


					});

				}

				resolve(drives);

			}).catch(reject);


		});

	};