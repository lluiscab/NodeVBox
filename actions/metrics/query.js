
	const spawn = require('child_process').spawn;

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			let prc = spawn('vboxmanage', ['metrics', 'collect', vm]);
			let dataCount = 0;

			function kill() {
				prc.stdin.pause();
				prc.stdout.pause();
				prc.kill();
			}

			function process(string) {

				require('../vmInfo')(vm).then(info => {

					let name = info.name;

					string = string.replace(new RegExp(name, 'gm'), '');

					console.log(name);
					console.log(string);
					let metrics = {
						time: new Date(),
						data: {}
					};

					let regex = /^\d\d:\d\d:\d\d.\d\d\d\s*(.+?(?= ))([^ ]*)\s*(.*)/gm;
					let match;

					while ((match = regex.exec(string)) !== null) {

						// Regex index
						if (match.index === regex.lastIndex) {
							regex.lastIndex++;
						}

						// Extract metric name

							// guest_ram_usage_cache:max
							let metricName = match[1].toLowerCase().replace(/\//g, '_');

							// guest_ram_usage_cache
							let metric =  metricName.split(':')[0];

							// max
							let name = metricName.split(':')[1] || 'current';

							// value
							let value = isNaN(parseInt(match[3])) ? null : match[3];


						// Create metric object if not saved
						if(!metrics.data[metric]) metrics.data[metric] = {};

						metrics.data[metric][name] = value;

					}

					for(let key in metrics.data) {

						if(!metrics.data[key].max) {
							metrics.data[key] = null;
						}

					}

					kill();
					resolve(metrics);

				}).catch(error => {
					kill();
					reject(error);
				});

			}

			prc.on('error', error => {
				reject(error.toString());
				kill();
			});

			prc.stdout.on('data', (data) => {

				dataCount++;

				if (dataCount === 1) {
					// Skip data, stdout is just headers
				}

				if (dataCount === 2) {
					process(data.toString());
				}

			});

			prc.stderr.on('data', data => {
				reject(data.toString());
				kill();
			});

		});
	};