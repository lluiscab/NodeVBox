
	const execute = require('../../lib/executeCommand');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			execute(['metrics', 'query', vm]).then(stdout => {

				// Break output in to array of lines
				let lines = stdout.split('\n');

				// Remove first and second line
				lines.splice(0,1);
				lines.splice(0,1);

				// Join the lines back
				let string = lines.join('\n');

				let metrics = {};

				let regex = /^(.+?(?=   ))   ([^ ]*)\s*(.*)/gm;
				let match;

				while ((match = regex.exec(string)) !== null) {

					if (match.index === regex.lastIndex) {
						regex.lastIndex++;
					}
					let metric = match[2].split(':');

					let metricname = metric[0].toLowerCase().replace(/\//g, '_');

					if(!metrics[metricname]) metrics[metricname] = {};

					let value = isNaN(parseInt(match[3])) ? null : match[3];

					if(metric[1]) {
						metrics[metricname][metric[1]] = value;
					} else {
						metrics[metricname].value = value;
					}

				}

				resolve(metrics);

			}).catch(reject);


		});

	};